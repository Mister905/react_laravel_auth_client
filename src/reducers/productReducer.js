import { GET_PRODUCTS } from "../actions/types";

const initial_state = {
  products: [],
  loading_products: true,
};

export default function (state = initial_state, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading_products: false,
      };

    default:
      return state;
  }
}
