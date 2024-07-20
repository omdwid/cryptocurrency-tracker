"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

interface Props {
    pageNumber: number;
    isNext: boolean;
}

const PaginationComponent = ({ pageNumber, isNext }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleNavigation = (direction: string) => {
        if (direction === "next") {
            const url = formUrlQuery(
                searchParams.toString(),
                "page",
                String(pageNumber + 1)
            );
            router.push(url, { scroll: true });
        } else {
            const url = formUrlQuery(
                searchParams.toString(),
                "page",
                String(pageNumber - 1)
            );
            router.push(url, { scroll: true });
        }
    };

    // return null incase there is no need for pagination
    if (!isNext && pageNumber === 1) return null;

    return (
        <div className="flex mt-5 w-full items-center justify-center gap-2">
            <Button
                disabled={pageNumber === 1}
                onClick={() => handleNavigation("prev")}
                className="border-light-700 dark:border-dark-400 btn flex min-h-[36px] items-center justify-center gap-2 border"
            >
                <p className="text-body dark:text-primary-100">Prev</p>
            </Button>
            <div className="bg-primary-500 flex justify-center items-center rounded-md px-3.5 py-2">
                <p className="text-body font-semibold dark:text-primary-100">
                    {pageNumber}
                </p>
            </div>
            <Button
                disabled={!isNext}
                onClick={() => handleNavigation("next")}
                className="border-light-700 dark:border-dark-400 btn flex min-h-[36px] items-center justify-center gap-2 border"
            >
                <p className="text-body dark:text-primary-100">Next</p>
            </Button>
        </div>
    );
};

export default PaginationComponent;
