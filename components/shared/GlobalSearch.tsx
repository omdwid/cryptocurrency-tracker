"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const GlobalSearch = () => {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative w-full max-w-[600px] max-lg:hidden">
            <div className="bg-light-800 dark:bg-dark-200 relative flex min-h-[50px] items-center gap-1 rounded-xl px-4">
                <label htmlFor="global-search">
                    <Image
                        src="/assets/icons/search.svg"
                        alt="search"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                    />
                </label>
                <Input
                    id="global-search"
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);

                        if (!isOpen) setIsOpen(true);

                        if (e.target.value === "" && isOpen) setIsOpen(false);
                    }}
                    placeholder="Search Globally"
                    className="text-paragraph text-black dark:text-primary-100 bg-transparent border-none focus:outline-none focus:shadow-none"
                />
            </div>
            {/* {isOpen && <GlobalResult />} */}
        </div>
    );
};

export default GlobalSearch;
