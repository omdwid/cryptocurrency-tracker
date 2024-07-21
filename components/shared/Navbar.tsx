import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import GlobalSearch from "./GlobalSearch";
import MobileNav from "./MobileNav";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-light-900 dark:bg-dark-300 p-6 sticky top-0 left-0 right-0 z-50 w-full gap-5 shadow-light-300 dark:shadow-none sm:px-12">
            {/* Logo of the Website */}
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/assets/images/site-logo.svg"
                    alt="logo"
                    width={30}
                    height={30}
                ></Image>
                <p className="ml-1 text-h2 font-bold primary-text-gradient">
                    Cryptonite
                </p>
            </Link>
            {/* Search Bar */}
            <GlobalSearch />
            {/* Theme Switcher */}
            <Theme />
            {/* Mobile Navbar using hamburger */}
            <MobileNav />
        </nav>
    );
};

export default Navbar;
