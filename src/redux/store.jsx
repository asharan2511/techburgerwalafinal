import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer, ordersReducer } from "./reducers/orderReducer";
import { adminReducer } from "./reducers/adminReducer";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export const server = "https://techburgerwala.onrender.com/api/v1";
