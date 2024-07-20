import axios, { AxiosInstance } from "axios";
import { timeConverter } from "./utils";


export class ApiWrapper {
    private axiosInstance: AxiosInstance;
    private gecko_api_key: string | undefined = process.env.GECKO_API_KEY;


    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://api.coingecko.com/api/v3",
            headers: {
                Authorization: `Bearer ${this.gecko_api_key}`
            }
        });
    }

    public getTrendingCoins = async () => {
        if (!this.gecko_api_key) {
            throw new Error("API key not found");
        }

        const url = "/search/trending/"
        const response = await this.axiosInstance.get(url);

        // console.log(response.data)

        if (response.status === 200) {
            // get the marketcap, 24h change, price, symbol, name of the coins, 
            const coins = response.data.coins.map((coin: any) => {
                return {
                    coinId: coin.item.id,
                    coinName: coin.item.name,
                    coinSymbol: coin.item.symbol,
                    coinImage: coin.item.thumb,
                    coinPrice: coin.item.data.price,
                    coinMarketCap: coin.item.data.market_cap,
                    coinSparkline: coin.item.data.sparkline,
                    coin24hChange: coin.item.data.price_change_percentage_24h.usd,
                }
            })

            return coins;
        }
        else {
            throw new Error("Failed to fetch trending coins data from the api");
        }
    }

    public getCoinChart = async (id: string, vs_currency: string, days: number, interval: string) => {
        if (!this.gecko_api_key) {
            throw new Error("API KEY NOT FOUND")
        }

        const url = `/coins/${id}/market_chart`

        const params = {
            vs_currency: vs_currency,
            days: days,
            interval: interval,
            precision: 2
        }
        const response = await this.axiosInstance.get(url, { params: params })
        if (response.status == 200) {
            const prices = response.data.prices;
            const chartData = prices.map((price: Array<number>) => {
                return {
                    "date": timeConverter(price[0]),
                    "price": price[1]
                }
            })

            return chartData
        }
        else {
            throw new Error("Error fetching the chart data about the coin")
        }
    }

    public getAllCoins = async (currency: string, page: number = 1, limit: number = 20) => {
        if (!this.gecko_api_key) {
            throw new Error("API KEY NOT FOUND")
        }

        const url = "/coins/markets"
        const params = {
            vs_currency: currency,
            per_page: limit,
            page: page,
        }

        const response = await this.axiosInstance.get(url, { params: params })
        if (response.status == 200) {
            const coins = response.data.map((coin: any) => {
                return {
                    coinId: coin.id,
                    coinName: coin.name,
                    coinSymbol: coin.symbol,
                    coinImage: coin.image,
                    coinPrice: coin.current_price,
                    coinMarketCap: coin.market_cap,
                    coin24hChange: coin.price_change_percentage_24h,
                }
            })

            return coins;
        }
        else
            throw new Error("Error fetching all coins data")
    }

    public getCompanyHoldings = async () => {
        if (!this.gecko_api_key) {
            throw new Error("API KEY NOT")
        }

        const btc_url = "/companies/public_treasury/bitcoin"
        const eth_url = "/companies/public_treasury/ethereum"

        const btc_response = await this.axiosInstance.get(btc_url)
        const eth_response = await this.axiosInstance.get(eth_url)

        const companyHoldings = [];
        if (btc_response.status == 200) {
            companyHoldings.push(...btc_response.data.companies.map((company: any) => {
                return {
                    ...company,
                    coin: "Bitcoin"
                }
            }))
        }

        if (eth_response.status == 200) {
            companyHoldings.push(...eth_response.data.companies.map((company: any) => {
                return {
                    ...company,
                    coin: "Ethereum"
                }
            }))
        }

        return companyHoldings;
    }

    public getGlobalMarketcapData = async () => {
        if (!this.gecko_api_key) {
            throw new Error("API KEY NOT FOUND")
        }

        const url = "/global"

        const response = await this.axiosInstance.get(url)


        if (response.status == 200) {
            const data = response.data.data;

            const market_cap = [];

            for (let i = 0; i < 10; i++) {
                market_cap.push({
                    name: Object.entries(data.total_market_cap)[i][0],
                    market_cap: Object.entries(data.total_market_cap)[i][1],
                    volume: Object.entries(data.total_volume)[i][1],
                })
            }

            const globalMarketData = {
                market_cap,
                active_cryptocurrencies: data.active_cryptocurrencies,
                market_cap_change: data.market_cap_change_percentage_24h_usd,
            }

            return globalMarketData;
        }

    }

    public getCoinData = async (id: string) => {
        if (!this.gecko_api_key) {
            throw new Error("API KEY NOT FOUND")
        }

        const url = `/coins/${id}`
        const params = {
            localization: false,
            tickers: false,
            market_data: true,
            community_data: false,
            developer_data: false,
            sparkline: false
        }
        const response = await this.axiosInstance.get(url, { params })

        if (response.status == 200) {
            const data = response.data;
            return {
                coinName: data.name,
                coinSymbol: data.symbol,
                coinDescription: data.description.en,
                coinImage: data.image.thumb,
                coinMarketCapRank: data.market_cap_rank,
                coinGenesisDate: data.genesis_date,
                coinHomepage: data.links.homepage[0],
                coinWhitepaper: data.links.homepage[0],
                coinPrice: data.market_data.current_price.usd,
                coinMarketData: {
                    marketCap: data.market_data.market_cap.usd,
                    high24h: data.market_data.high_24h.usd,
                    low24h: data.market_data.low_24h.usd,
                    priceChange24h: data.market_data.price_change_percentage_24h,
                    priceChange7d: data.market_data.price_change_percentage_7d,
                    priceChange14d: data.market_data.price_change_percentage_14d,
                    priceChange30d: data.market_data.price_change_percentage_30d,
                    priceChange200d: data.market_data.price_change_percentage_200d,
                    priceChange1y: data.market_data.price_change_percentage_1y,
                }
            }
        }
    }
}
