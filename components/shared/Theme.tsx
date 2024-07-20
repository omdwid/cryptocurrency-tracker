"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/reducers/themeSlice";

const Theme = () => {
    const { theme } = useSelector((state: any) => {
        return state.theme;
    });

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleTheme(theme));
    };

    useEffect(() => {
        if (theme === "") {
            dispatch(toggleTheme(localStorage.getItem("theme") || "dark"));
        }
    }, [theme, dispatch]);

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
