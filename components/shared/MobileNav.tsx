"use client";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
    const pathname: string = usePathname();
    // console.log(pathname)
    return (
        <section className="flex h-full flex-col gap-6 pt-16">
            {sidebarLinks.map((item) => {
                const isActive =
                    pathname.includes(item.route) &&
                    item.route.length >= 1 &&
                    pathname === item.route;
                return (
                    <SheetClose asChild key={item.route}>
                        <Link
                            href={item.route}
                            className={`${
                                isActive
                                    ? "primary-gradient rounded-lg text-light-900"
                                    : "dark:text-primary-100"
                            } flex items-center justify-start gap-4 bg-transparent p-4`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={`${
                                    isActive ? "" : "invert dark:invert-0"
                                }`}
                            />
                            <p
                                className={`${
                                    isActive ? "base-bold" : "base-medium"
                                }`}
                            >
                                {item.label}
                            </p>
                        </Link>
                    </SheetClose>
                );
            })}
        </section>
    );
};

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src="/assets/icons/hamburger.svg"
                    alt="menu"
                    width={36}
                    height={36}
                    className="invert dark:invert-0 sm:hidden"
                />
            </SheetTrigger>
            <SheetContent
                side={"left"}
                className="bg-light-900 dark:bg-black border-none"
            >
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

                <SheetClose asChild>
                    <NavContent />
                </SheetClose>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
