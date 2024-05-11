import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["donation"],
  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),

    updateDonations: builder.mutation({
      query: (data) => {
        console.log("From Redux", data);
        return {
          url: `/donations/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["donation"],
    }),

    addDonations: builder.mutation({
      query: (data) => {
        console.log("From Redux", data);
        return {
          url: "/create-donation",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["donation"],
    }),

    deleteDonations: builder.mutation({
      query: (id) => {
        console.log("From Redux", id);
        return {
          url: `/donations/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["donation"],
    }),
  }),
});

export const {
  useGetDonationsQuery,
  useAddDonationsMutation,
  useDeleteDonationsMutation,
  useUpdateDonationsMutation,
} = baseApi;
