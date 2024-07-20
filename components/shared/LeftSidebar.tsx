"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LeftSidebar = () => {
    const pathname = usePathname();

    return (
        <section className="bg-light-900 dark:bg-dark-500 sticky top-36 left-6 h-fit rounded-[20px] flex flex-col justify-between overflow-y-auto p-4 shadow-light-300 dark:shadow-none max-sm:hidden lg:min-w-[200px] max-lg:min-w-[100px] custom-scrollbar">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((item) => {
                    const isActive =
                        pathname.includes(item.route) &&
                        item.route.length >= 1 &&
                        pathname === item.route;

                    return (
                        <Link
                            key={item.route}
                            href={item.route}
                            className={`text-h3 ${
                                isActive
                                    ? "primary-gradient rounded-lg text-primary-100"
                                    : " dark:text-primary-100 text-black !important"
                            } flex items-center justify-start gap-4 bg-transparent p-4`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={25}
                                height={25}
                                className={`${
                                    isActive ? "" : "invert dark:invert-0"
                                }`}
                            />
                            <p
                                className={`${
                                    isActive ? "font-bold" : "font-medium"
                                } max-lg:hidden `}
                            >
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default LeftSidebar;
