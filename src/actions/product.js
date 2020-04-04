import { GET_PRODUCTS, CREATE_PRODUCT } from "./types";
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
    dispatch(create_alert("error", "Failed to load products"));
  }
};

export const create_product = (form_data, history) => async (dispatch) => {
  try {
    const { brand, name, description, image } = form_data;
    let data = new FormData();
    data.append("brand", brand);
    data.append("name", name);
    data.append("description", description);
    data.append("image", image);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const res = await API.post("/products/create", data, config);
    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });
    history.push("/products");
  } catch (error) {
    dispatch(create_alert("error", "Failed to create product"));
  }
};
