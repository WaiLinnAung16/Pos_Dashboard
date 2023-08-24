import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import authSlice from "./slices/authSlice";
import { userApi } from "./services/userApi";
import registerSlice from "./slices/registerSlice";
import { productApi } from "./services/productApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    authSlice: authSlice,
    registerSlice: registerSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      productApi.middleware
    ),
});
