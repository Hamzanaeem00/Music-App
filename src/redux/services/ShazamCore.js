import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'd5c3905fa3msh83df27b521ed586p1588cajsn901cb5486be7',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
//   },
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then((response) => response.json())
//   .then((response) => console.log("response", response))
//   .catch((err) => console.error(err));

  export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi" ,
    baseQuery: fetchBaseQuery({
      baseUrl: "https://shazam-core.p.rapidapi.com/v1",
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', 'd5c3905fa3msh83df27b521ed586p1588cajsn901cb5486be7');

        return headers;
      } 
    }),
    endpoints: (builder) =>({
      getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),
  
  });


  export const { 
    useGetTopChartsQuery,
   } = shazamCoreApi;