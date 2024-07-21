"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/reducers/themeSlice";
import { Coin } from "@/lib/types";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import CoinCard from "./CoinCard";

const RightSidebar = () => {
    const hotQuestions = [
        { _id: 1, title: "hello world" },
        { _id: 2, title: "Hello WOlrd" },
    ];
    const popularTags = [
        { _id: "1", name: "hello", numberOfQuestions: 10 },
        { _id: "2", name: "world", numberOfQuestions: 20 },
    ];

    const { coins } = useSelector((state: any) => state.watchlist);

    return (
        <section className="bg-light-900 rounded-[20px] dark:bg-dark-500 sticky right-6 top-36 flex h-[600px] flex-col overflow-y-auto p-6 shadow-light-300 dark:shadow-none max-xl:hidden w-[400px] custom-scrollbar">
            <h1 className="dark:text-primary-100 text-center text-h3 font-semibold">
                Watchlist
            </h1>
            <Table className="mt-3 w-full overflow-x-auto custom-scrollbar text-small dark:text-primary-100">
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Token</TableHead>
                        <TableHead className="text-center">Symbol</TableHead>
                        <TableHead className="text-center">
                            Last Price
                        </TableHead>
                        <TableHead className="text-center">
                            24H Change
                        </TableHead>
                        <TableHead className="text-center">
                            Market Cap
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {coins.map((coin: Coin) => {
                        const img_url = coin.coinImage;
                        return (
                            <TableRow key={coin.coinId} className="">
                                <TableCell className="text-center">
                                    <Link
                                        href={{
                                            pathname: "/product",
                                            query: { id: coin.coinId },
                                        }}
                                    >
                                        <CoinCard
                                            imageUrl={img_url}
                                            name={coin.coinName}
                                        />
                                    </Link>
                                </TableCell>
                                <TableCell className="text-center">
                                    {coin.coinSymbol}
                                </TableCell>
                                <TableCell className="text-center">
                                    {coin.coinPrice.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-center">
                                    {coin.coin24hChange.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-center">
                                    {coin.coinMarketCap}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </section>
    );
};

export default RightSidebar;
