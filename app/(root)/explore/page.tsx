import { ApiWrapper } from "@/lib/apiWrapper";
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
import CoinCard from "@/components/shared/CoinCard";
import Image from "next/image";
import { type Coin } from "@/lib/types";
import PaginationComponent from "@/components/shared/PaginationComponent";
import Link from "next/link";

const Page = async ({ searchParams }: any) => {
    const api = new ApiWrapper();
    let coinsData: Coin[] = [];
    try {
        coinsData = await api.getAllCoins("usd", searchParams.page || 1, 20);
    } catch (error: any) {
        return (
            <div className="dark:text-primary-100 text-h3 text-black">
                Request Limit Reached! Please refresh after a minute
            </div>
        );
    }

    return (
        <div className="bg-light-900 dark:bg-dark-500 p-6 rounded-[10px]">
            <h1 className="dark:text-primary-100 text-black text-h3 font-semibold">
                All Coins
            </h1>
            <Table className="mt-3 w-full overflow-x-auto custom-scrollbar text-paragraph dark:text-primary-100 text-black">
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
                    {coinsData.map((coin: Coin) => {
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
                                    {coin.coinPrice}
                                </TableCell>
                                <TableCell
                                    className={`text-center ${
                                        coin.coin24hChange > 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {coin.coin24hChange}
                                </TableCell>
                                <TableCell className="text-center">
                                    {coin.coinMarketCap}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <PaginationComponent
                pageNumber={searchParams.page ? +searchParams.page : 1}
                isNext={true}
            />
        </div>
    );
};

export default Page;
