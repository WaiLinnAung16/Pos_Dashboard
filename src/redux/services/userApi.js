import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API } from "../API";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["UserLists"],
  endpoints: (builder) => ({
    getUserLists: builder.query({
      query: (token) => ({
        url: "user-lists",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["UserLists"],
    }),
  }),
});

export const { useGetUserListsQuery } = userApi;
