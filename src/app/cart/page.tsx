
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

import { useCart } from "@/context/CartContext"; // Add this


interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  image: any;
}
interface CartItem {
  id: number;
  userId: string;
  productId: string;
  quantity: number;
  productData?: Product;
}

export default function CartPage() {
  const { user } = useUser();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 🧠 Fetch cart items from our DB + Sanity product data
  useEffect(() => {
    if (!user) return;

    const fetchCart = async () => {
      try {
        // 🛒 1. Fetch cart entries for this user
        const res = await fetch("/api/cart");
        const data: CartItem[] = await res.json();

        // 🏷 2. Get unique product IDs
        const productIds = data.map((item) => item.productId);
        // 🛍 3. Fetch matching product data from Sanity
        const sanityProducts = await client.fetch(
          `*[_type == "product" && _id in $ids]{
            _id,
            name,
            price,
            description,
            image
          }`,
          { ids: productIds }
        );

        // 🔄 4. Merge product data with cart
        const cartWithProducts = data.map((item) => ({
          ...item,
          productData: sanityProducts.find((p: Product) => p._id === item.productId),
        }));

        setCartItems(cartWithProducts);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load cart:", error);
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  // 🗑 Remove item from cart
  const handleRemove = async (cartItemId: number) => {
    try {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId: cartItemId }),
      });

    if (res.ok) {
  setCartItems((prev) => prev.filter((item) => item.id !== cartItemId)); // 🔄 Update global cart state
  setCartItems((prev) => prev.filter((item) => item.id !==cartItemId));
}
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };
   const calculateTotal = () =>
    cartItems.reduce((total, item) => {
      const price = parseFloat(item.productData?.price || "0");
      return total + price * item.quantity;
    }, 0);

  if (loading) return <p className="p-6">Loading cart...</p>;
  if (cartItems.length === 0) return <p className="p-6">Your cart is empty.</p>;

  return (
    <div className="max-w-[400px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {/* 🛒 Loop through cart items */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border-b pb-4"
          >
            {item.productData?.image && (
              <Image
                src={urlFor(item.productData.image).width(200).url()}
                alt={item.productData.name}
                width={120}
                height={120}
                className="rounded object-cover"
              />
            )}
            <div className="flex-1 flex flex-col w-[400px] justify-start">
              <h2 className="text-xl font-semibold">
                {item.productData?.name}
              </h2>
              <p className="text-gray-600 text-sm">
                {item.productData?.description.slice(0, 100)}...
              </p>
              <p className="mt-1 font-medium">
                ${item.productData?.price} × {item.quantity}
              </p>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 font-bold hover:underline ml-32"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
          

      {/* 💵 Cart Summary */}
      <div className="mt-10 border-t pt-6 w-[400px] justify-start">
        <div className="flex justify-between text-xl font-semibold mb-4">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>

        {/* ✅ Stripe Checkout Button Placeholder */}
    <Link href={`/checkout?total=${calculateTotal().toFixed(2)}`}>
<button
          onClick={() => {
            // TODO: Add Stripe checkout integration here
            // Example: fetch('/api/checkout-session') OR redirect to /checkout page
            alert("Stripe Checkout will be connected here.");
          }}
          className="bg-green-400 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-medium"
        >
          Proceed to Checkout
        </button></Link>  
      </div>
         </div>
  );
}
