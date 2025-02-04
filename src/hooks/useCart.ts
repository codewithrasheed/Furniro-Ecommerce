'use client'
import { useState, useEffect } from "react";

// Custom Hook to manage cart state
export const useCart = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [order, setOrder] = useState<any[]>([]);

  // Function to load cart from localStorage
  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    setCart(storedCart);
  };

  const loadOrder = () => {
    const storedOrder = JSON.parse(localStorage.getItem("order") ?? "[]");
    setOrder(storedOrder);
  }

  // Load cart when component mounts
  useEffect(() => {
    loadCart();
    loadOrder();

    // Listen for localStorage changes
    const handleStorageChange: any = () => {
      loadCart();
      loadOrder();
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

    // Function to remove cart data
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");

    // Dispatch event to update all components
    window.dispatchEvent(new Event("storage"));
  };
    // Function to remove order 
  const clearOrder = () => {
    setOrder([]);
    localStorage.removeItem("order");

    // Dispatch event to update all components
    window.dispatchEvent(new Event("storage"));
  };

  return { cart, addToCart, removeFromCart, clearCart, order, clearOrder};
};
