import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: {
        coins: [
            {
                coinId: "solidus-aitech",
                coinName: "Solidus Ai Tech",
                coinSymbol: "AITECH",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/22114/standard/CMC_Logo_200x200.png?1719949930",
                coinPrice: 0.11095829515084236,
                coinMarketCap: "$76,116,358",
                coinSparkline:
                    "https://www.coingecko.com/coins/22114/sparkline.svg",
                coin24hChange: -1.3540269484050014,
            },
            {
                coinId: "rocky-the-rock",
                coinName: "Rocky",
                coinSymbol: "ROCKY",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/39137/standard/ROCKY.jpg?1720706260",
                coinPrice: 0.021590492873752483,
                coinMarketCap: "$20,904,160",
                coinSparkline:
                    "https://www.coingecko.com/coins/39137/sparkline.svg",
                coin24hChange: 22.94638252684021,
            },
            {
                coinId: "the-open-network",
                coinName: "Toncoin",
                coinSymbol: "TON",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/17980/standard/ton_symbol.png?1696517498",
                coinPrice: 7.307066321025788,
                coinMarketCap: "$18,362,477,845",
                coinSparkline:
                    "https://www.coingecko.com/coins/17980/sparkline.svg",
                coin24hChange: 1.448727890146975,
            },
            {
                coinId: "banana-gun",
                coinName: "Banana Gun",
                coinSymbol: "BANANA",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/31744/standard/bg-logo-coingecko-200.png?1716971024",
                coinPrice: 69.04373699623201,
                coinMarketCap: "$166,070,284",
                coinSparkline:
                    "https://www.coingecko.com/coins/31744/sparkline.svg",
                coin24hChange: 19.553418692051093,
            },
            {
                coinId: "qubic-network",
                coinName: "Qubic",
                coinSymbol: "QUBIC",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/32949/standard/Monogram_dark.png?1714674384",
                coinPrice: 0.0000022848440754587412,
                coinMarketCap: "$242,223,683",
                coinSparkline:
                    "https://www.coingecko.com/coins/32949/sparkline.svg",
                coin24hChange: -9.147009300985259,
            },
            {
                coinId: "azuro-protocol",
                coinName: "Azuro Protocol",
                coinSymbol: "AZUR",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/38499/standard/azuro.jpeg?1717727357",
                coinPrice: 0.1755000323526737,
                coinMarketCap: "$26,675,479",
                coinSparkline:
                    "https://www.coingecko.com/coins/38499/sparkline.svg",
                coin24hChange: 37.63611374161083,
            },
            {
                coinId: "zignaly",
                coinName: "Zignaly",
                coinSymbol: "ZIG",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/14796/standard/zignaly.jpg?1704292004",
                coinPrice: 0.12991667406870355,
                coinMarketCap: "$184,653,244",
                coinSparkline:
                    "https://www.coingecko.com/coins/14796/sparkline.svg",
                coin24hChange: 2.3614099112836424,
            },
            {
                coinId: "the-real-landwolf",
                coinName: "LandWolf",
                coinSymbol: "WOLF",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/38789/standard/IMG_0920.png?1719160056",
                coinPrice: 0.007957050084811545,
                coinMarketCap: "$79,582,204",
                coinSparkline:
                    "https://www.coingecko.com/coins/38789/sparkline.svg",
                coin24hChange: -12.596978229253054,
            },
            {
                coinId: "pepe",
                coinName: "Pepe",
                coinSymbol: "PEPE",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/29850/standard/pepe-token.jpeg?1696528776",
                coinPrice: 0.00001144308744418147,
                coinMarketCap: "$4,827,890,524",
                coinSparkline:
                    "https://www.coingecko.com/coins/29850/sparkline.svg",
                coin24hChange: -3.808232115980189,
            },
            {
                coinId: "peipeicoin-vip",
                coinName: "PeiPei",
                coinSymbol: "PEIPEI",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/38512/standard/PeiPei.png?1718315778",
                coinPrice: 3.346670025842075e-7,
                coinMarketCap: "$140,254,944",
                coinSparkline:
                    "https://www.coingecko.com/coins/38512/sparkline.svg",
                coin24hChange: -9.876691547405617,
            },
            {
                coinId: "solana",
                coinName: "Solana",
                coinSymbol: "SOL",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/4128/standard/solana.png?1718769756",
                coinPrice: 162.28085918242155,
                coinMarketCap: "$75,381,572,814",
                coinSparkline:
                    "https://www.coingecko.com/coins/4128/sparkline.svg",
                coin24hChange: 2.240185034766363,
            },
            {
                coinId: "sanctum-2",
                coinName: "Cloud",
                coinSymbol: "CLOUD",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/38485/standard/CLOUD_128x128.png?1721331750",
                coinPrice: 0.2963526864066588,
                coinMarketCap: "$53,228,895",
                coinSparkline:
                    "https://www.coingecko.com/coins/38485/sparkline.svg",
                coin24hChange: -2.7180377558594846,
            },
            {
                coinId: "maga",
                coinName: "MAGA",
                coinSymbol: "TRUMP",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/31498/standard/Maga-Trump-Logo-200px.png?1696530309",
                coinPrice: 6.274723680228809,
                coinMarketCap: "$286,901,724",
                coinSparkline:
                    "https://www.coingecko.com/coins/31498/sparkline.svg",
                coin24hChange: -10.015327857399743,
            },
            {
                coinId: "ether-fi",
                coinName: "Ether.fi",
                coinSymbol: "ETHFI",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/35958/standard/etherfi.jpeg?1710254562",
                coinPrice: 2.2599185381267106,
                coinMarketCap: "$260,450,922",
                coinSparkline:
                    "https://www.coingecko.com/coins/35958/sparkline.svg",
                coin24hChange: -3.0802706753786753,
            },
            {
                coinId: "g-token",
                coinName: "Gravity",
                coinSymbol: "G",
                coinImage:
                    "https://coin-images.coingecko.com/coins/images/39200/standard/gravity.jpg?1721020647",
                coinPrice: 0.06067006716281391,
                coinMarketCap: "$437,825,652",
                coinSparkline:
                    "https://www.coingecko.com/coins/39200/sparkline.svg",
                coin24hChange: -13.476339109257088,
            },
        ],
    },
    reducers: {
        addToWatchlist: (state, action) => {
            state.coins.push(action.payload);
        },
        removeFromWatchlist: (state, action) => {
            state.coins = state.coins.filter(
                (coin) => coin.id !== action.payload.id
            );
        },
    },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
