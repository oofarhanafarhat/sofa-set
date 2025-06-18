import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/component/Nav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Sofa Store | Responsive UI",
  description: "Responsive furniture store app for testing functionality, layout, and SEO setup.",
  openGraph: {
    title: "Test Sofa Store",
    description: "Preview version of Sofa Store app for layout and UI testing.",
    url: "https://sofa-set-bdlt.vercel.app/",
    siteName: "Sofa Store Test",
    images: [
      {
        url: "https://sofa-set-bdlt.vercel.app/test-image.jpg",
        width: 600,
        height: 400,
        alt: "Test Sofa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofa Store Test App",
    description: "Testing responsive UI and layout setup.",
    images: ["https://sofa-set-bdlt.vercel.app/test-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
         <CartProvider>
      <html lang="en">
        <body>
         <Nav/>
                {children}

          <Footer/>
        </body>
      </html>
      </CartProvider>
  </ClerkProvider>
);
}

