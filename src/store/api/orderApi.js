import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getOrder: builder.query({
            query: () => ({
                url: '/orders',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            }),
        }),
    }),
});

export const { useGetOrderQuery} = orderApi;