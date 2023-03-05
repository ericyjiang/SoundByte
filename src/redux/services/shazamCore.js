import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "d918384ee0mshca69e07c090dae8p140263jsn8ee68cebdd38"
      );
      return headers;
    },
  }),
  endpoints: (builders) => ({
    getTopCharts: builders.query({ query: () => "v1/charts/world" }),
    getSongsByGenre: builders.query({
      query: (genre) => `/v1/charts/genre-worlds?genre_code${genre}`,
    }),
    getSongDetails: builders.query({
      query: ({ songid }) => `v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builders.query({
      query: ({ songid }) => `v1/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builders.query({
      query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builders.query({
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
} = shazamCoreApi;
