import { createReducer } from "@reduxjs/toolkit";

// first parenthesis suggest initial state
export const adminReducer = createReducer(
  { orders: [], users: [] },
  {
    getDashboardStateRequest: (state) => {
      state.loading = true;
    },
    getDashboardStateSuccess: (state, action) => {
      state.loading = false;
      state.usersCount = action.payload.userCount;
      state.ordersCount = action.payload.ordersCount;
      state.totalIncome = action.payload.totalIncome;
    },
    getDashboardStateFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    getAdminUsersRequest: (state) => {
      state.loading = true;
    },
    getAdminUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAdminUsersFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    getAdminOrdersRequest: (state) => {
      state.loading = true;
    },
    getAdminOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getAdminOrdersFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    processOrderRequest: (state) => {
      state.loading = true;
    },
    processOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    processOrderFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
