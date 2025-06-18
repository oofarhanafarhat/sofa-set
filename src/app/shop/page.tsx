// app/shop/page.tsx
"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useUser } from "@clerk/nextjs";
import Nav from "@/component/Nav";
import PageWithNav from "@/component/PageWithNav";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  description: string;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        slug,
        price,
        image,
        description
      }`;
      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId: string) => {
    if (!user) {
      window.location.href = "/sign-in";
      return;
    }

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      if (res.ok) {
        alert("Added to cart!");
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#FBEBB5] to-[#FFF4D2] 16C] min-h-screen">
   
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">OUR PRODUCT</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white hover:shadow-2xl">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            {product.image && (
              <Image
                src={urlFor(product.image).width(600).height(400).url()}
                alt={product.name}
                width={600}
                height={400}
                 
                className="rounded-lg object-cover lg-w[600px] hover:translate-y-5 scale-75"
              />
            )}
            <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600 mt-1">${product.price}</p>
            <p className="text-sm text-gray-500 mt-2">
              {product.description.slice(0, 80)}...
            </p>
            <div className="mt-4 flex gap-2">
              <Link href={`/shop/${product.slug.current}`}>
                <button className="px-4 lg:px-3 py-2 bg-black text-white rounded-xl hover:bg-gray-800">
                  View Details
                </button>
              </Link>
              <button
                onClick={() => handleAddToCart(product._id)}
                className="px-4 lg:px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  
    </div>
   
  );
}