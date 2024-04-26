import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {

    return (
        <nav className="flexBetween 
        max-container padding-container relative z-30 py-5 bg-white-200">
            <Link href="/">
                <Image src="/logo-tripmakers.png" alt="logo" width={74} height={29}></Image>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex ">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="bold-16 text-black-50 flexCenter cursor-pointer p-2 transition-all hover:bg-gray-100 hover:rounded-md">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden"></div>

            <Image
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    );
}

export default Navbar;