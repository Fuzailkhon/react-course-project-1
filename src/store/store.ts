import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './Features/searchSlice';
import loadingSlice from './Features/loadingSlice';
import { animeApi } from './api/animeApi';
import { listenerMiddleware } from './middleware';
import animeSlice from './Features/animeSlice';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

const searchListState = [''];

const store = configureStore({
  preloadedState: {
    searchList:
      searchListState === null
        ? { values: [], currentValue: '' }
        : { values: searchListState, currentValue: '' },
  },
  reducer: {
    searchList: searchSlice,
    loadingFlags: loadingSlice,
    anime: animeSlice,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(animeApi.middleware),
    listenerMiddleware.middleware,
  ],
});

export const makeStore: MakeStore<typeof store> = () => store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export default store;
