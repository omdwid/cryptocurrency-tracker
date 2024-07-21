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
import Link from "next/link";
import { Coin } from "@/lib/types";
import { BarChartComponent } from "@/components/charts/BarChartComponent";

const page = async () => {
    const api = new ApiWrapper();

    let companyHodings: any[] = [];
    let market_cap_data: any = {};
    try {
        companyHodings = await api.getCompanyHoldings();
        market_cap_data = await api.getGlobalMarketcapData();
    } catch (error: any) {
        console.log("Error while fetching");
        return (
            <div className="dark:text-primary-100 text-h3 text-black">
                Unable to show the data: {error.message}
            </div>
        );
    }

    console.log(market_cap_data);
    return (
        <>
            <BarChartComponent
                chartData={market_cap_data?.market_cap}
                active_currencies={market_cap_data?.active_cryptocurrencies}
                market_cap_change={market_cap_data?.market_cap_change}
            />
            <div className="bg-light-900 shadow-light-300 mt-6 dark:shadow-none dark:bg-dark-500 p-6 rounded-[10px]">
                <h1 className="dark:text-primary-100 text-black text-h3 font-semibold">
                    Public Company Holdings (BTC and ETH)
                </h1>
                <Table className="mt-3 w-full overflow-x-auto custom-scrollbar text-paragraph dark:text-primary-100 text-black">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Coin</TableHead>
                            <TableHead className="">Name</TableHead>
                            <TableHead>Symbol</TableHead>
                            <TableHead>Country</TableHead>
                            <TableHead className="">Total Holdings</TableHead>
                            <TableHead className="">
                                Total entry price (USD)
                            </TableHead>
                            <TableHead className="">
                                Total current price (USD)
                            </TableHead>
                            <TableHead className="">%total supply</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {companyHodings.map((company: any) => {
                            return (
                                <TableRow key={company.symbol} className="">
                                    <TableCell>{company.coin}</TableCell>
                                    <TableCell className="">
                                        {company.name}
                                    </TableCell>
                                    <TableCell>{company.symbol}</TableCell>
                                    <TableCell>{company.country}</TableCell>
                                    <TableCell>
                                        {company.total_holdings}
                                    </TableCell>
                                    <TableCell>
                                        {company.total_entry_value_usd}
                                    </TableCell>
                                    <TableCell>
                                        {company.total_current_value_usd}
                                    </TableCell>
                                    <TableCell>
                                        {company.percentage_of_total_supply}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default page;
