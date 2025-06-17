// File: components/Nav.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch, FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/CartContext"; // 🧠 Import hook

const Nav = ({ bg = true }: { bg?: boolean }) => {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart(); // 🛒 Get cart from context
  const cartItems = cartCount;

  return (
    <header
    
      className="w-full h-[100px] flex items-center px-4 lg:px-12 justify-between bg-gradient-to-r from-[#FBEBB5] to-[#FFF4D2] 16C]"
    >
      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center gap-4">
        <Link href="/cart" className="relative text-xl">
          <FiShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        <button onClick={() => setOpen(!open)} className="text-2xl">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex w-full justify-between items-center">
        <ul className="flex gap-6 text-base font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/b1">Blogs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <ul className="flex gap-4 text-xl relative">
          <li><Link href="/accounts"><FiUser /></Link></li>
          <li><FiSearch /></li>
          <li><FiHeart /></li>

          <li className="relative">
            <Link href="/cart">
              <FiShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-[100px] left-0 w-full bg-[#FBEBB5] lg:hidden z-50">
          <ul className="flex flex-col items-start p-4 gap-4 text-base font-medium">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/shop" onClick={() => setOpen(false)}>Shop</Link></li>
            <li><Link href="/b1" onClick={() => setOpen(false)}>Blogs</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            <li><Link href="/accounts" onClick={() => setOpen(false)}>Account</Link></li>
            <li className="relative">
              <Link href="/cart" onClick={() => setOpen(false)}>
                🛒 Cart
                {cartCount > 0 && (
                  <span className="absolute top-0 left-[45px] bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;