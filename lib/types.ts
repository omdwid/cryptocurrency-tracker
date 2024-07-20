export interface Coin {
    coinId: number;
    coinName: string;
    coinSymbol: string;
    coinImage: string;
    coinPrice: number;
    coinMarketCap: number;
    coinSparkline?: string;
    coin24hChange: number;
}
