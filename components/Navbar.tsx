import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {

    return (
        <nav className="border-2 flexBetween 
        max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/" alt="logo" width={74} height={29}>

                </Image>
            </Link>

            <h1 className="text-black flexCenter cursor-pointer pb-1.5 transition-all
                    hover:font-bold">TRIPMAKERS</h1>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 
                    text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all
                    hover:font-bold">
                        {link.label}
                    </Link>
                ))}

            </ul>

            <Image
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            >

            </Image>


        </nav>
    );
}

export default Navbar;