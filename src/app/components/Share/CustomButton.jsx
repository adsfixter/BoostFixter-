import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CustomButton({ text, link }) {
  return (
    <div>
      <Link
        href={link}
        className=" px-6 py-3 rounded-3xl hover:bg-[#02644F] text-primary border text-center justify-center hover:text-secondary flex items-center"
      >
        {text} <ArrowUpRight />
      </Link>
    </div>
  );
}
