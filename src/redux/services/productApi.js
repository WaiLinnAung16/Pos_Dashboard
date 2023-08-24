import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API } from "../API";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["products", "brands", "stocks"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (token) => ({
        url: "product",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["products"],
    }),
    getBrands: builder.query({
      query: (token) => ({
        url: "brand",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brands"],
    }),
    getStocks: builder.query({
      query: (token) => ({
        url: "stock",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["stocks"],
    }),
  }),
});

export const { useGetProductsQuery, useGetBrandsQuery, useGetStocksQuery } =
  productApi;
