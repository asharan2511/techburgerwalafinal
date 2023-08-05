import axios from "axios";
import { server } from "../store";

export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch({ type: "getDashboardStateRequest" });

    const { data } = await axios.get(`${server}/admin/stats`, {
      withCredentials: true,
    });
    dispatch({ type: "getDashboardStateSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getDashboardStateFail",
      payload: error.response.data.message,
    });
  }
};

export const getAdminUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminUsersRequest" });

    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });

    dispatch({ type: "getAdminUsersSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "getAdminUsersFail",
      payload: error.response.data.message,
    });
  }
};

export const getAdminOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminOrdersRequest" });

    const { data } = await axios.get(`${server}/admin/orders`, {
      withCredentials: true,
    });
    console.log(data.orders);
    dispatch({ type: "getAdminOrdersSuccess", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "getAdminOrdersFail",
      payload: error.response.data.message,
    });
  }
};

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "processOrderRequest" });

    const { data } = await axios.get(`${server}/admin/orders/${id}`, {
      withCredentials: true,
    });
    console.log(data.orders);
    dispatch({ type: "processOrderSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "processOrderFail",
      payload: error.response.data.message,
    });
  }
};
