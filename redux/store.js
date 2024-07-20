import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import watchlistReducer from "./reducers/watchlistSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        watchlist: watchlistReducer,
    },
});

export default store;
