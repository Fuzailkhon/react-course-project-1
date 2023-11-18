import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import searchSlice from "./search/searchSlice";
import { listenerMiddleware } from "./search/middleware";

const searchListState = JSON.parse(localStorage.getItem('search') || 'null')

export const store = configureStore({
    preloadedState:{
        searchList: searchListState === null ? [] : searchListState
    },
    reducer: {
        counter: counterReducer,
        searchList: searchSlice
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        listenerMiddleware.middleware
    ]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store