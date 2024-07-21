"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/reducers/themeSlice";

const Theme = () => {
    const { theme } = useSelector((state: any) => {
        return state.theme;
    });

    console.log("Printing the theme for clarity", theme);

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleTheme(theme));
    };

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            const toggle_theme =
                localStorage.getItem("theme") === "dark" ? "light" : "dark";
            dispatch(toggleTheme(toggle_theme));
        } else {
            dispatch(toggleTheme("light"));
            localStorage.setItem("theme", "dark");
        }
    }, []);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage["theme"] = "light";
        } else if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            localStorage["theme"] = "dark";
        }
    }, [theme]);

    return (
        <div className="w-[30px] h-[30px] rounded-full bg-light-900 dark:bg-light-700 flex justify-center px-1">
            <Image
                src="/assets/icons/sun.svg"
                alt="sun"
                width={18}
                height={18}
                className="rounded-full dark:hidden cursor-pointer"
                onClick={handleClick}
            />
            <Image
                src="/assets/icons/moon.svg"
                alt="sun"
                width={18}
                height={18}
                className="rounded-full hidden dark:flex cursor-pointer"
                onClick={handleClick}
            />
        </div>
    );
};

export default Theme;
