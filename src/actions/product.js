import { GET_PRODUCTS } from "./types";
import { create_alert } from "../actions/alert";
import API from "../api";

export const get_products = () => async (dispatch) => {
  try {
    const res = await API.get("/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(create_alert("error", "Failed to create product"));
  }
};
