import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (model) => ({
        url: '/admin/login',
        method: 'POST',
        body: model,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;