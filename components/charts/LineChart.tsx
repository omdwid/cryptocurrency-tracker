"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis,
} from "recharts";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import CustomTooltip from "./BarChartTooltip";
import LineChartTooltip from "./LineChartTooltip";
import CoinCard from "../shared/CoinCard";
// const chartData = [
//     { month: "January", desktop: 186 },
//     { month: "February", desktop: 305 },
//     { month: "March", desktop: 237 },
//     { month: "April", desktop: 73 },
//     { month: "May", desktop: 209 },
//     { month: "June", desktop: 214 },
// ];

const chartConfig = {
    desktop: {
        label: "Cryptocurrency Data",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

const getYAxisTicks = (data: any) => {
    const prices = data.map((item: any) => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const tickCount = 6; // Number of ticks you want
    const tickInterval = (maxPrice - minPrice) / (tickCount - 1);

    return Array.from({ length: tickCount }, (_, i) => {
        const value = minPrice + i * tickInterval;
        return value.toFixed(2);
    });
};

const normalizeData = (data: any) => {
    const prices = data.map((item: any) => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return data.map((item: any) => ({
        ...item,
        normalizedPrice: (item.price - minPrice) / (maxPrice - minPrice),
    }));
};

interface Props {
    chartData: Array<any>;
    imageUrl: string;
    name: string;
    price: number;
    percentageChange: number;
    marketCap: number;
}
export function LineChartComponent({
    chartData,
    imageUrl,
    name,
    price,
    percentageChange,
    marketCap,
}: Props) {
    // const y_ticks = [
    //     0, 57388.19, 58943, 60497.81, 62052.619999999995, 63607.43, 65162.24,
    // ];
    const new_chartData = normalizeData(chartData);

    return (
        <Card>
            <CardHeader>
                <CardTitle
                    className={`${
                        price > 0 ? "text-green-500" : "text-red-500"
                    }`}
                >
                    ${price}
                </CardTitle>
                <CardDescription className="dark:text-primary-100 text-black">
                    <CoinCard imageUrl={imageUrl} name={name} />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={new_chartData}
                        margin={{
                            top: 12,
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            // axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 4)}
                        />
                        {/* <YAxis
                            tickLine={false}
                            axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value) => `$${value.toFixed(2)}`}
                        /> */}
                        <ChartTooltip
                            cursor={false}
                            content={
                                <LineChartTooltip originalData={chartData} />
                            }
                            // label={"price"}
                        />
                        <Area
                            dataKey="normalizedPrice"
                            type="linear"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            strokeWidth={2}
                            stroke="var(--color-desktop)"
                            dot={false}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4 text-h3 dark:text-primary-100">
                <div className="flex items-center gap-1 leading-none font-semibold">
                    <div className="flex gap-3 items-center">
                        Percentange Change (24H):{" "}
                        <p
                            className={
                                percentageChange > 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            }
                        >
                            {Number(percentageChange).toFixed(2)}
                        </p>
                    </div>
                    {percentageChange > 0 ? (
                        <TrendingUp color="#22c55e" />
                    ) : (
                        <TrendingDown color="#ef4444" />
                    )}
                </div>
                <div className="leading-1 font-semibold">
                    Market Cap: {marketCap}
                </div>
            </CardFooter>
        </Card>
    );
}
