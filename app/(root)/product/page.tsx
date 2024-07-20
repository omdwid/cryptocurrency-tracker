import { LineChartComponent } from "@/components/charts/LineChart";
import CoinDescription from "@/components/shared/CoinDescription";
import { ApiWrapper } from "@/lib/apiWrapper";
import React from "react";

const Page = async ({ searchParams }: any) => {
    const coinId = searchParams.id;

    const api = new ApiWrapper();
    let chartData;
    let coinData;
    try {
        chartData = await api.getCoinChart(coinId, "usd", 7, "daily");
        coinData = await api.getCoinData(coinId);
    } catch (error: any) {
        return (
            <div className="dark:text-primary-100 text-h3 text-black">
                Unable to show the data: {error.message}
            </div>
        );
    }

    console.log(coinData);
    return (
        <div>
            <LineChartComponent
                chartData={chartData}
                imageUrl={coinData?.coinImage}
                name={coinData?.coinName}
                price={coinData?.coinPrice}
                percentageChange={coinData?.coinMarketData.priceChange24h}
                marketCap={coinData?.coinMarketData.marketCap}
            />
            <div className="bg-light-900 dark:bg-dark-500 dark:text-primary-100 p-6 mt-4 rounded-[10px]">
                <h1 className="text-h2 font-semibold ">
                    About {coinData?.coinName}
                </h1>
                <CoinDescription desc={coinData?.coinDescription} />
            </div>
        </div>
    );
};

export default Page;
