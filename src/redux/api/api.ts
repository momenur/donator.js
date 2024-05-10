import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDonationsQuery } = baseApi;
