"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCustomerData } from "@/sanity/sanity.query";

interface Order {
  orderNumber: string;
  orderStatus: string;
  orderDate: string;
  total: number;
  products: { name: string; price: number; quantity: number }[];
}

interface Customer {
  orders: Order[];
}

const Profile = () => {
  const { data: session, status } = useSession();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redirect if not logged in
    }
  }, [status, router]);

  useEffect(() => {
    const getCustomer = async () => {
      if (session?.user?.email) {
        const fetchedCustomer = await getCustomerData(session.user.email);
        setCustomer(fetchedCustomer); // Set the fetched customer data
        console.log(fetchedCustomer)
      }
    };
    getCustomer();
  }, [session]);

  const totalOrders = customer?.orders?.length ?? 0; // Calculate total orders

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <Image
            src={session?.user?.image ?? "/default-avatar.png"}
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full border border-gray-300 shadow-sm"
          />
        </div>

        {/* User Name */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome, {session?.user?.name}
        </h2>
        <p className="text-gray-500">{session?.user?.email}</p>

        {/* Total Orders Section */}
        <div className="mt-6">
          <h3 className="text-xl font-medium text-gray-800">Total Orders:</h3>
          <p className="text-gray-600">{totalOrders} Orders</p>
        </div>

        {/* View My Orders Section */}
        {(customer?.orders?.length ?? 0) > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-medium text-gray-800">My Orders:</h3>
            <div className="space-y-4 mt-4">
              {customer?.orders?.map((order: any, index: number) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
                >
                  <h4 className="font-semibold text-gray-700">Order #{order.orderNumber}</h4>
                  <p className="text-gray-600">Status: {order.orderStatus}</p>
                  <p className="text-gray-600">Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                  <p className="text-gray-600">Total: ${order.total}</p>

                  {/* Ordered Products */}
                  <div className="mt-2">
                    <h5 className="font-semibold text-gray-700">Products:</h5>
                    <ul className="space-y-2 mt-2">
                      {order?.cartItem?.map((product: { title: string; price: number; quantity: number }, idx: number) => (
                        <li key={idx} className="text-gray-600">
                          {product.title} - ${product.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sign Out Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
