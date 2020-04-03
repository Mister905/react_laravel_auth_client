import {
  LOGIN_USER,
  USER_LOADED,
  LOGOUT_USER,
  AUTH_ERROR
} from "../actions/types";

const initial_state = {
  token: localStorage.getItem("token"),
  is_authenticated: false,
  loading_user: true,
  user: null
};

export default function(state = initial_state, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      const { token, first_name, last_name } = payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        token,
        is_authenticated: true,
        user: { first_name, last_name }
      };
    case USER_LOADED:
      return {
        ...state,
        is_authenticated: true,
        loading_user: false,
        user: payload
      };
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        is_authenticated: false,
        loading_user: false
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        is_authenticated: false,
        loading_user: false,
        user: null
      };
    default:
      return state;
  }
}
