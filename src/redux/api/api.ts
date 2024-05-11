import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://l2-b2-frontend-path-assignment-6-server-starter-pack-chi.vercel.app/api/v1",
  }),
  tagTypes: ["donation", "update"],
  endpoints: (builder) => ({
    // GET all Donations
    getDonations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["donation", "update"],
    }),

    // GET Single Donation
    getDonation: builder.query({
      query: (id) => ({
        url: `/donations/${id}`,
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
      invalidatesTags: ["update"],
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
  useGetDonationQuery,
  useAddDonationsMutation,
  useDeleteDonationsMutation,
  useUpdateDonationsMutation,
} = baseApi;
