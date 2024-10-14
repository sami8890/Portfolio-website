"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "Projects", path: "/Projects" },
    { name: "contact", path: "/contact" },
];

const Nav = () => {
    const pathname = usePathname(); // Get current pathname

    return (
        <nav className="flex gap-8 mb-6 pt-4">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`capitalize font-medium transition-all hover:text-accent ${link.path === pathname ? "text-accent border-b-2 border-accent" : ""}`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
