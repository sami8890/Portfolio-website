"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "Project",
        path: "/Projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

export const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center" aria-label="Open menu">
                <CiMenuFries className="text-[32px] text-white" />
            </SheetTrigger>
            <SheetContent className="flex flex-col p-4">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-accent text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold"> Sami Gabol<span className="text-accent">. </span> </h1>
                    </Link>
                </div>
                {/* Render links dynamically */}
                <nav className="flex flex-col gap-8 items-center justify-center">
                    {Links.map((link) => (
                        <Link key={link.name} href={link.path}>
                            <div
                                className={`p-2 text-2xl capitalize ${link.path === pathname && "text-accent border-b-2 border-rgb(29, 218, 224)"}' hover:text-accent transition-all font-bold text-accent ' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </div>
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};
