import { createSlice } from '@reduxjs/toolkit';
import { animeApi } from '../api/animeSearch';

export interface ILoadingFlags {
  animeLoading: boolean;
  detailsLoading: boolean;
}

const initialState: ILoadingFlags = {
  animeLoading: false,
  detailsLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    toggleAnimeLoading: (state) => {
      state.animeLoading = !state.animeLoading;
    },
    toggleDetailsLoading: (state) => {
      state.detailsLoading = !state.detailsLoading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(animeApi.endpoints.animeSearch.matchPending, (state) => {
        state.animeLoading = true;
      })
      .addMatcher(animeApi.endpoints.animeSearch.matchFulfilled, (state) => {
        state.animeLoading = false;
      })
      .addMatcher(animeApi.endpoints.animeSearch.matchFulfilled, (state) => {
        state.animeLoading = false;
      })
      .addMatcher(animeApi.endpoints.getAnimeById.matchPending, (state) => {
        state.detailsLoading = true;
      })
      .addMatcher(animeApi.endpoints.getAnimeById.matchFulfilled, (state) => {
        state.detailsLoading = false;
      });
  },
});

export const { toggleAnimeLoading, toggleDetailsLoading } =
  loadingSlice.actions;

export default loadingSlice.reducer;
