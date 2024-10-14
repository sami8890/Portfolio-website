import Link from "next/link";
import { Button } from "./button"; // Import your custom Button component
import React from "react";
import Nav from "./nav";
import { MobileNav } from "../MobileNav";
import Contact from "@/app/contact/page";
export default function Header() {
  return (
    <header className="py-2 xl:py-7 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sami Gabol <span className="text-[#38ff81]">.</span>
          </h1>
        </Link>

        {/* Desktop navigation and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="">
            {/* Use the custom Button component */}
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
