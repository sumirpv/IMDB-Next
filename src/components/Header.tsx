import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex items-center justify-between p-3 max-w-6xl mx-auto">
      <div className="flex gap-8">
        <MenuItem title="home" Icon={AiFillHome} address="/" />
        <MenuItem title="about" Icon={BsFillInfoCircleFill} address="/about" />
      </div>
      <Link className="flex gap-4 align-center" href={"/"}>
        <span className="text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2">
          IMDB
        </span>
      </Link>
    </div>
  );
}
