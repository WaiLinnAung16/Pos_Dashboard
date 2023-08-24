import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../API";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user, token) => ({
        url: "register",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: "logout",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["Auth"],
    }),
    getPhoto: builder.query({
      query: (token) => ({
        url: "photo",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetPhotoQuery,
} = authApi;
