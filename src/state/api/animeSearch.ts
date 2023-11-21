import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnime, IAnimeList } from '../../models';

export const animeApi = createApi({
    reducerPath: 'animeAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.jikan.moe/v4/anime'}),
    tagTypes: ['animeSearch', 'anime'],
    endpoints: (build) => ({
      animeSearch: build.query<IAnimeList, string>({
        query: (name) => ({
          url: '',
          params: {
            q: name
          }
        }),
        providesTags: () => ['animeSearch']
      }),
      getAnimeById: build.query<IAnime, number|string>({
        query: (id) => ({
          url: `/${id}`,
        }),
        providesTags: () => ['anime']
      })
    }),
    
});
