import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Coin } from "@/lib/types";
import { ApiWrapper } from "@/lib/apiWrapper";
import CoinCard from "@/components/shared/CoinCard";
import Image from "next/image";

const Page = async () => {
    let coins: Coin[] = [];
    const api = new ApiWrapper();
    try {
        coins = await api.getTrendingCoins();
    } catch (error: any) {
        return (
            <div className="dark:text-primary-100 text-h3 text-black">
                Unable to show the data: {error.message}
            </div>
        );
    }
    return (
        <div className="bg-light-900 dark:bg-dark-500 p-6 rounded-[10px] mt-6">
            <div className="flex justify-between">
                <h1 className="dark:text-primary-100 text-black text-h3 font-semibold">
                    Trending Market
                </h1>
                <Link href="/explore" className="text-blue-600 text-body">
                    View more coins
                </Link>
            </div>
            <Table className="mt-3 w-full overflow-x-auto custom-scrollbar text-paragraph dark:text-primary-100 text-black">
                <TableCaption>A list of trending coins.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Token</TableHead>
                        <TableHead className="">Symbol</TableHead>
                        <TableHead>Last Price</TableHead>
                        <TableHead className="text-center">
                            24H Change
                        </TableHead>
                        <TableHead className="text-center">
                            Market Cap
                        </TableHead>
                        <TableHead className="text-center">Sparkline</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {coins.map((coin: Coin) => {
                        const img_url = coin.coinImage;
                        // console.log(img_url);
                        return (
                            <TableRow key={coin.coinId} className="">
                                <TableCell>
                                    <CoinCard
                                        imageUrl={img_url}
                                        name={coin.coinName}
                                    />
                                </TableCell>
                                <TableCell className="text-right">
                                    {coin.coinSymbol}
                                </TableCell>
                                <TableCell>
                                    {coin.coinPrice.toFixed(2)}
                                </TableCell>
                                <TableCell
                                    className={`${
                                        Number(coin.coin24hChange.toFixed(2)) >
                                        0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {coin.coin24hChange.toFixed(2)}
                                </TableCell>
                                <TableCell>{coin.coinMarketCap}</TableCell>
                                <TableCell>
                                    <Image
                                        src={coin.coinSparkline!}
                                        alt="sparkline"
                                        width={100}
                                        height={50}
                                    />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;
