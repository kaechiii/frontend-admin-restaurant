import { configureStore } from '@reduxjs/toolkit';
import { couponApi } from './api/couponApi';
import { loginApi } from './api/loginApi';
import { menuApi } from './api/menuApi';
import { orderApi } from './api/orderApi';

const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    [couponApi.reducerPath]: couponApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
    .concat(menuApi.middleware).concat(couponApi.middleware)
});

export default store;