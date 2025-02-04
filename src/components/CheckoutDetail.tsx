"use client";

import { useState } from "react";
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
export default function BillingDetails() {
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
  const router = useRouter();
  const handleProceed = async (e: any) => {
    e.preventDefault();
    await Swal.fire({
      title: "Do you want to Proceed?",
      text: "Processing Your Order please Wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "Your Order has been successfully processed!.",
          icon: "success",
        });
      }
    });
    const order = {
      _type: "order",
      firstName: firstName,
      lastName: lastName,
      company: companyName,
      country: country,
      address: address,
      city: city,
      province: province,
      zipCode: zipCode,
      phone: phone,
      email: email,
      info: info,
      cartItem: cart.map((item) => ({
        _key: nanoid(),
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      orderStatus: "pending",
      orderDate: new Date().toISOString(),
      orderNumber: Math.round(Math.random() * 1000000),
    };

    try {
      await sanityClient.create(order);
      localStorage.setItem("order", JSON.stringify([order]));
    } catch (error) {
      console.log("Error Creating Order", error);
    }
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
    router.push("/complete");
  };
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
                  required
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
                  required
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
                  <SelectItem value="pk">Pakistan</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="sa">South Africa</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="my">Malaysia</SelectItem>
                  <SelectItem value="zw">Zimbabwe</SelectItem>
                  <SelectItem value="sg">Singhapore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="streetAddress">Street address</Label>
              <Input
                id="streetAddress"
                required
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
                required
                className="w-full"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="province">Province</Label>
              <Select
                value={province}
                onValueChange={(value) => {
                  setProvince(value);
                }}
              >
                <SelectTrigger id="province" className="w-full">
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sindh">Sindh</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="balochistan">Balochistan</SelectItem>
                  <SelectItem value="kpk">Khyber Pakhtunkhwa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zipCode">ZIP code</Label>
              <Input
                id="zipCode"
                required
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
                required
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
                required
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
