import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"}),
    reducerPath: "adminApi",
    tagTypes: ["User"],
    endpoints: (build) => ({
        register: build.query({
            query: ({ firstName, lastName, email, password, phone, address, isCustomer, isArtist, customerId, artistId }) => ({
                url: "/authRoutes/register",
                method: "POST",
                params: { firstName, lastName, email, password, phone, address, isCustomer, isArtist, customerId, artistId },
            }),
            providesTags: ["User"]
        }),
        login: build.query({
            query: ({email, password}) => ({
                url: "/authRoutes/register",
                method: "GET",
                params: {email, password},
            }),
            providesTags: ["User"]
        }),
    }),
}); 

export const {
    useRegisterQuery,
    useLoginQuery,
} = api;