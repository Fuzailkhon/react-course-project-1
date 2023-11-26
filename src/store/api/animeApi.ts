import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnime, IAnimeList } from '@/types/anime';
import { HYDRATE } from 'next-redux-wrapper';

export const animeApi = createApi({
  reducerPath: 'animeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/anime' }),
  tagTypes: ['animeSearch', 'anime'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    animeSearch: build.query<IAnimeList, string>({
      query: (name) => ({
        url: '?sfw',
        params: {
          q: name,
        },
      }),
      providesTags: () => ['animeSearch'],
    }),
    getAnimeById: build.query<IAnime, number | string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: () => ['anime'],
    }),
  })
});

export const {
  util: { getRunningQueriesThunk },
} = animeApi;

export const {
  animeSearch
} = animeApi.endpoints;
