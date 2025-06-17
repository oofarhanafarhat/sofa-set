// File: components/PageWithNav.tsx

"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import Nav from "./Nav";

export default function PageWithNav({
  children,
  bg = true,
}: {
  children: React.ReactNode;
  bg?: boolean;
}) {
  return (
    <CartProvider>
      <Nav bg={bg} />
      {children}
    </CartProvider>
  );
}