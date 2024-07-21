"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

// const chartData = [
//     { month: "January", desktop: 186, mobile: 80 },
//     { month: "February", desktop: 305, mobile: 200 },
//     { month: "March", desktop: 237, mobile: 120 },
//     { month: "April", desktop: 73, mobile: 190 },
//     { month: "May", desktop: 209, mobile: 130 },
//     { month: "June", desktop: 214, mobile: 140 },
//     { month: "May", desktop: 209, mobile: 130 },
//     { month: "June", desktop: 214, mobile: 140 },
//     { month: "May", desktop: 209, mobile: 130 },
//     { month: "June", desktop: 214, mobile: 140 },
// ];

// {
//     name: 'dot',
//     market_cap: 405415742814.7345,
//     volume: 15334872847.910038
//   }

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

function normalizeDataLogScale(data: any) {
    // Apply logarithmic scaling to market cap and volume
    const logMarketCaps = data.map((item: any) => Math.log(item.market_cap));
    const logVolumes = data.map((item: any) => Math.log(item.volume));

    // Find min and max of log-transformed data
    const minLogMarketCap = Math.min(...logMarketCaps);
    const maxLogMarketCap = Math.max(...logMarketCaps);
    const minLogVolume = Math.min(...logVolumes);
    const maxLogVolume = Math.max(...logVolumes);

    // Normalize the log-transformed values between 0 and 1
    return data.map((item: any, index: any) => ({
        ...item,
        market_cap:
            (logMarketCaps[index] - minLogMarketCap) /
            (maxLogMarketCap - minLogMarketCap),
        volume:
            (logVolumes[index] - minLogVolume) / (maxLogVolume - minLogVolume),
    }));
}

export function BarChartComponent({
    chartData,
    active_currencies,
    market_cap_change,
}: any) {
    const normalizedChartData = normalizeDataLogScale(chartData);

    return (
        <Card className="dark:bg-dark-500 bg-light-900">
            <CardHeader className="dark:text-primary-100">
                <CardTitle>Global Market Cap</CardTitle>
                <CardDescription>Top 10 Cryptocurrencies</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={normalizedChartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <CustomTooltip
                                    originalData={chartData}
                                    value="Market Cap "
                                />
                            }
                        />
                        <Bar
                            dataKey="market_cap"
                            fill="var(--color-desktop)"
                            radius={4}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-h3 dark:text-primary-100 font-semibold">
                <div className="flex gap-2 leading-none">
                    Global Market Cap Change (24H):{" "}
                    <p
                        className={`${
                            market_cap_change > 0
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {market_cap_change.toFixed(2)}%
                    </p>
                </div>
                <div className="leading-none text-muted-foreground">
                    Active Cryptocurrencies: {active_currencies}
                </div>
            </CardFooter>
        </Card>
    );
}
