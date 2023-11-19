import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import searchSlice from "./search/searchSlice";
import { listenerMiddleware } from "./search/middleware";
import {animeApi} from "./api/animeSearch";
import loadingSlice from "./search/loadingSlice";

const searchListState = JSON.parse(localStorage.getItem("search") || "null");

export const store = configureStore({
    preloadedState:{
        searchList: searchListState === null ? { values: [], currentValue: '' } : {values: searchListState, currentValue: ''}
    },
    reducer: {
        counter: counterReducer,
        searchList: searchSlice,
        loadingFlags: loadingSlice,
        [animeApi.reducerPath]: animeApi.reducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware().concat(animeApi.middleware),
        listenerMiddleware.middleware
    ]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store