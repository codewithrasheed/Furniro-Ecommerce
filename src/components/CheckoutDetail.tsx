"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import Swal from "sweetalert2";
import sanityClient from "@/sanity/sanity.client";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";
export default function BillingDetails() {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redirect if not logged in
    }
  }, [status, router]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const deliveryFee = subtotal >= 1500 ? 0 : 500;
  const total = subtotal + deliveryFee;

  const formValid =
    firstName &&
    lastName &&
    country &&
    address &&
    city &&
    province &&
    zipCode &&
    phone &&
    email;
  const handleProceed = async (e: any) => {
    e.preventDefault();
    if (!formValid) {
      await Swal.fire({
        title: "Error",
        text: "Please fill all the fields",
        icon: "error",
      });
      return;
    }

    if (cart === null || cart.length === 0) {
      await Swal.fire({
        title: "Cart is Empty",
        text: "Please add items to cart to proceed",
        icon: "error",
      });
      return;
    }

    const result = await Swal.fire({
      title: "Do you want to Proceed?",
      text: "Processing Your Order, please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    });

    if (!result.isConfirmed) {
      return;
    }

    // Check if the customer exists
    let existingCustomer = await sanityClient.fetch(
      `*[_type == "customer" && email == $email][0]`,
      { email: session?.user?.email }
    );

    let customerId;

    if (existingCustomer) {
      customerId = existingCustomer._id; // Use existing customer's ID
    } else {
      // Create a new customer and get its valid document ID
      const customer = await sanityClient.create({
        _type: "customer",
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        orders: [],
      });
      customerId = customer._id;
    }

    // Create the order
    const order = {
      _type: "order",
      firstName,
      lastName,
      company: companyName,
      country,
      address,
      city,
      province,
      zipCode,
      phone,
      email,
      info,
      cartItem: cart.map((item) => ({
        _key: nanoid(),
        _type: "reference",
        _ref: item._id,
      })),
      total,
      orderStatus: "pending",
      orderDate: new Date().toISOString(),
      orderNumber: Math.round(Math.random() * 1000000),
      customer: {
        _type: "reference",
        _ref: customerId, // Now using a valid document ID
      },
    };

    try {
      // Save the order to Sanity
      const createdOrder = await sanityClient.create(order);
      localStorage.setItem("order", JSON.stringify([order]));
      console.log("Order created successfully:", createdOrder);

      if (existingCustomer) {
        // If the customer exists, update their orders array
        await sanityClient
          .patch(existingCustomer._id)
          .setIfMissing({ orders: [] })
          .append("orders", [
            {
              _key: nanoid(),
              _type: "reference",
              _ref: createdOrder._id,
            },
          ])
          .commit();
        console.log("Order added to existing customer:", existingCustomer);
      } else {
        // If the customer does not exist, create a new customer
        const customer = {
          _type: "customer",
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
          orders: [
            {
              _key: nanoid(),
              _type: "reference",
              _ref: createdOrder._id,
            },
          ],
        };
        const createdCustomer = await sanityClient.create(customer);
        console.log("New customer created with order:", createdCustomer);
      }

      // Clear the form and cart
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setCountry("");
      setAddress("");
      setCity("");
      setProvince("");
      setZipCode("");
      setPhone("");
      setEmail("");
      setInfo("");

      // Redirect to the complete page
      router.push("/complete");
    } catch (error) {
      console.error("Error processing order:", error);
      await Swal.fire({
        title: "Error",
        text: "An error occurred while processing your order.",
        icon: "error",
      });
    }
  };

  //   e.preventDefault();
  //   if (!formValid) {
  //     await Swal.fire({
  //       title: "Error",
  //       text: "Please fill all the fields",
  //       icon: "error",
  //     });
  //     return;
  //   }

  //   if (cart === null || cart.length === 0) {
  //     await Swal.fire({
  //       title: "Cart is Empty",
  //       text: "Please add items to cart to proceed",
  //       icon: "error",
  //     });
  //     return;
  //   }

  //   const result = await Swal.fire({
  //     title: "Do you want to Proceed?",
  //     text: "Processing Your Order, please wait a moment",
  //     icon: "info",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, Proceed!",
  //   });

  //   if (!result.isConfirmed) {
  //     return;
  //   }

  //   // Create the order
  //   const order = {
  //     _type: "order",
  //     firstName: firstName,
  //     lastName: lastName,
  //     company: companyName,
  //     country: country,
  //     address: address,
  //     city: city,
  //     province: province,
  //     zipCode: zipCode,
  //     phone: phone,
  //     email: email,
  //     info: info,
  //     cartItem: cart.map((item: any) => ({
  //       _key: nanoid(),
  //       _type: "reference",
  //       _ref: item._id,
  //     })),
  //     total: total,
  //     orderStatus: "pending",
  //     orderDate: new Date().toISOString(),
  //     orderNumber: Math.round(Math.random() * 1000000),
  //     customer: {
  //       _key: nanoid(),
  //       _type: "reference",
  //       _ref: session?.user?.email,
  //     },
  //   };

  //   try {
  //     // Save the order to Sanity
  //     const createdOrder = await sanityClient.create(order);
  //     localStorage.setItem("order", JSON.stringify([order]));
  //     console.log("Order created successfully:", createdOrder);

  //     // Check if the customer exists
  //     const existingCustomer = await sanityClient.fetch(
  //       `*[_type == "customer" && email == $email][0]`,
  //       { email: session?.user?.email }
  //     );

  //     if (existingCustomer) {
  //       // If the customer exists, update their orders array
  //       await sanityClient
  //         .patch(existingCustomer._id)
  //         .setIfMissing({ orders: [] })
  //         .append("orders", [
  //           {
  //             _key: nanoid(),
  //             _type: "reference",
  //             _ref: createdOrder._id,
  //           },
  //         ])
  //         .commit();
  //       console.log("Order added to existing customer:", existingCustomer);
  //     } else {
  //       // If the customer does not exist, create a new customer
  //       const customer = {
  //         _type: "customer",
  //         name: session?.user?.name,
  //         email: session?.user?.email,
  //         image: session?.user?.image,
  //         orders: [
  //           {
  //             _key: nanoid(),
  //             _type: "reference",
  //             _ref: createdOrder._id,
  //           },
  //         ],
  //       };
  //       await sanityClient.create(customer);
  //       console.log("New customer created with order:", customer);
  //     }

  //     // Clear the form and cart
  //     setFirstName("");
  //     setLastName("");
  //     setCompanyName("");
  //     setCountry("");
  //     setAddress("");
  //     setCity("");
  //     setProvince("");
  //     setZipCode("");
  //     setPhone("");
  //     setEmail("");
  //     setInfo("");

  //     // Redirect to the complete page
  //     router.push("/complete");
  //   } catch (error) {
  //     console.error("Error processing order:", error);
  //     await Swal.fire({
  //       title: "Error",
  //       text: "An error occurred while processing your order.",
  //       icon: "error",
  //     });
  //   }
  // };
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="mb-6 text-xl font-bold">Billing details</h1>
          <form onSubmit={handleProceed} className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  className="w-full"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  className="w-full"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="companyName">Company Name (optional)</Label>
              <Input
                id="companyName"
                className="w-full"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country">Country / Region</Label>
              <Select
                value={country}
                onValueChange={(value) => {
                  setCountry(value);
                }}
              >
                <SelectTrigger id="country" className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pakistan">Pakistan</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem value="South Africa">South Africa</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Malaysia">Malaysia</SelectItem>
                  <SelectItem value="Zimbabwe">Zimbabwe</SelectItem>
                  <SelectItem value="Singhapore">Singhapore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="streetAddress">Street address</Label>
              <Input
                id="streetAddress"
                className="w-full"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">Town / City</Label>
              <Input
                id="city"
                className="w-full"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="province">Province</Label>
              <Input
                id="province"
                className="w-full"
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zipCode">ZIP code</Label>
              <Input
                id="zipCode"
                className="w-full"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                className="w-full"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                className="w-full"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="additionalInfo">Additional information</Label>
              <Textarea
                id="additionalInfo"
                className="min-h-[100px] resize-none w-full"
                placeholder="Notes about your order, e.g. special notes for delivery"
                value={info}
                onChange={(e) => {
                  setInfo(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 text-xs sm:text-sm text-gray-500">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-black font-semibold hover:underline">
                privacy policy
              </a>
              .
            </div>
            <Button
              type="submit"
              className="rounded-md border-2 border-[#000] bg-transparent w-full sm:w-auto sm:mx-48 mt-4 text-black hover:bg-black hover:text-white"
              size="lg"
            >
              Place order
            </Button>
          </form>
        </div>
        <div className="mt-6 lg:mt-0 lg:pl-4 xl:pl-8">
          <h1 className="mb-4 text-lg sm:text-xl font-bold">Product Summary</h1>
          <div className="rounded-lg p-3 sm:p-4 md:p-6">
            <div className="flex justify-between items-center w-full">
              <h2 className="mb-4 text-sm sm:text-base font-semibold">
                Product
              </h2>
              <h2 className="mb-4 text-sm sm:text-base font-semibold">Price</h2>
              <h2 className="mb-4 text-sm sm:text-base font-semibold">
                Remove
              </h2>
            </div>

            {cart.map((product: any, index: number) => (
              <div
                key={index}
                className="mb-4 flex flex-wrap sm:flex-nowrap justify-between items-center pb-4 text-xs sm:text-sm w-full"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={product.productImage}
                    alt={product.title}
                    width={40}
                    height={50}
                  />
                  <span className="text-gray-600 text-xs sm:text-sm">
                    {product.title} &nbsp; X &nbsp; 1
                  </span>
                </div>
                <div className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
                  <span className="text-xs sm:text-sm">Rs {product.price}</span>
                  <span>
                    <button onClick={() => removeFromCart(product._id)}>
                      <Image
                        src="/remove.png"
                        alt="Remove"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </button>
                  </span>
                </div>
              </div>
            ))}
            <hr />
            <br />
            <div className="mb-2 flex flex-wrap justify-between pb-2 text-xs sm:text-sm">
              <span className="font-bold">Subtotal</span>
              <span className="font-semibold text-xs sm:text-sm">
                Rs{" "}
                {subtotal >= 1500
                  ? `${subtotal} + 0 Delivery Charges`
                  : `${subtotal} + 500 Delivery Charges`}
              </span>
            </div>
            <div className="mb-3 sm:mb-5 mt-1 flex justify-end items-center">
              <p className="text-xs sm:text-sm">
                Free Delivery above Rs. 1500.
              </p>
            </div>

            <div className="mb-4 flex justify-between items-center">
              <span className="font-bold text-sm sm:text-base">Total</span>
              <span className="ml-1 text-lg sm:text-xl lg:text-2xl font-bold text-[#B88E2F]">
                Rs. {total}.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
