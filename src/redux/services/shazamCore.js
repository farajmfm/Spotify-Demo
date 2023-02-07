import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '22168809ddmsh660a4c22b4c59a7p1f30fbjsna500e73398e0');

        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;



{/*const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '22168809ddmsh660a4c22b4c59a7p1f30fbjsna500e73398e0',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
.catch(err => console.error(err));*/}