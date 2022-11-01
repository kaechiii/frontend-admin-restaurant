import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    tagTypes: ['Menu'],
    endpoints: (builder) => ({
        getMenu: builder.query({
            query: () => ({
                url: '/menu',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            }),
            providesTags: ['Menu']
        }),
        deleteMenu: builder.mutation({
            query: ({id}) => ({
              url: `/menu/${id}`,
              method: 'DELETE',
              headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
              },
            }),
            invalidatesTags: ['Menu']
        }),
        updateMenu: builder.mutation({
            query: (model) => ({
              url: `/menu`,
              method: 'PUT',
              body: model,
              headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
              },
            }),
            invalidatesTags: ['Menu']
        }),
        postMenu: builder.mutation({
            query: (model) => ({
              url: `/menu`,
              method: 'POST',
              body: model,
              headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
              },
            }),
            invalidatesTags: ['Menu']
        }),
        getReview: builder.query({
            query: ({id}) => ({
                url: `/review/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            }),
        }),
    }),
});

export const { useGetMenuQuery, useDeleteMenuMutation, useUpdateMenuMutation, usePostMenuMutation, useGetReviewQuery} = menuApi;