import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ bg = true }: { bg ?: boolean }) => {

  return (
    <div
      style={{
        backgroundColor: bg ? "#FBEBB5" : "transparent",
      }}
      className="wrappe h-[100px] flex items-center pt-10 lg:justify-end"
    >
      <nav>
        <ul className="flex justify-center lg:items-center lg:px-6">
         <Link href={"/"} > <li className="px-3">Home </li></Link>
         <Link href={"/shop"}> <li className="px-3">Shop </li></Link>
         <Link href={"/b1"}><li className="px-3">About</li></Link>
         <Link href={"/contact"}><li className="px-3 mr-10">Contact </li></Link>
          <li className=" px-2">
           <Link href={"/accounts"}> <Image src={"/contact.png"} width={28} height={28} alt=""/></Link>
          </li>
          <li className=" px-2">
            <Image src={"/search.png"} width={28} height={28} alt=""/>
          </li>
          <li className=" px-2">
            <Image src={"/heart.png"} width={28} height={28} alt="" />
          </li>
          <li className=" px-2">
           <Link href={"/cart"}> <Image src={"/cart.png"} width={28} height={28} alt="" /></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

