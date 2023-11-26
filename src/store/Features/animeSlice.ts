import { createSlice } from '@reduxjs/toolkit';
import build from 'next/dist/build';
import { animeApi } from '../api/animeApi';
import { IAnime, IAnimeList, IAnimeListPagination } from '@/types/anime';

export interface IAnimeSlice {
  anime: IAnime[];
  pagination?: IAnimeListPagination | null;
  animeDetails?: IAnime | null
}

const initialState: IAnimeSlice = {
  anime: [],
  pagination: null,
  animeDetails: null
};

export const animeSlice = createSlice({
  initialState,
  name: 'anime',
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      animeApi.endpoints.animeSearch.matchFulfilled,
      (state, { payload }) => {
        state.anime = payload.data;
        state.pagination = payload.pagination;
      }
    ).addMatcher(
      animeApi.endpoints.getAnimeById.matchFulfilled,
      (state, { payload }) => {
        console.log(payload)
        state.animeDetails = {...payload}
      }
    )
  },
});

export default animeSlice.reducer