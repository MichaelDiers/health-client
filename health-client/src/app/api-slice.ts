import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * The base api slice for service calls. Each feature injects its endpoints
 * and enhance the api slice by new tags.
 */
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});

export default apiSlice;
