import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const couponApi = createApi({
    reducerPath: 'couponApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    tagTypes: ['Coupon'],
    endpoints: (builder) => ({
        postCoupon: builder.mutation({
            query: (model) => ({
              url: `/coupon-types`,
              method: 'POST',
              body: model,
              headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
              },
            }),
            invalidatesTags: ['Coupon']
        }),
        getCoupons: builder.query({
            query: () => ({
              url: '/coupon-types',
              method: 'GET',
              headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
              },
            }),
            providesTags: ['Coupon']
          }),
          deleteCoupon: builder.mutation({
            query: ({id}) => ({
              url: `/coupon/${id}`,
              method: 'DELETE',
              headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
              },
            }),
            invalidatesTags: ['Coupon']
        }),
    }),
});

export const { usePostCouponMutation, useGetCouponsQuery, useDeleteCouponMutation} = couponApi;