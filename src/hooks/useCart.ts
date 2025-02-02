'use client'
import { useState, useEffect } from "react";

// Custom Hook to manage cart state
export const useCart = () => {
  const [cart, setCart] = useState<any[]>([]);

  // Function to load cart from localStorage
  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    setCart(storedCart);
  };

  // Load cart when component mounts
  useEffect(() => {
    loadCart();

    // Listen for localStorage changes
    const handleStorageChange = () => {
      loadCart();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Function to add an item to the cart
  const addToCart = (item: any) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Dispatch event to update all components
    window.dispatchEvent(new Event("storage"));
  };

  // Function to remove an item from the cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Dispatch event to update all components
    window.dispatchEvent(new Event("storage"));
  };

  return { cart, addToCart, removeFromCart };
};
