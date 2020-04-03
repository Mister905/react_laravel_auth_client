import { LOGIN_USER, USER_LOADED, LOGOUT_USER, AUTH_ERROR } from "./types";
import { create_alert } from "../actions/alert";
import API from "../api";

export const load_user = () => async dispatch => {
  try {
    const res = await API.get("/user");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
    console.log(error.message);
  }
};

export const register = (form_data, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  let request_body = JSON.stringify(form_data);

  try {
    const res = await API.post("/register", request_body, config);
    history.push("/login");
    dispatch(create_alert("success", "Registration Successful"));
  } catch (error) {
    console.log(error.message);
    dispatch(create_alert("error", "Registration Error"));
  }
};

export const login = (form_data, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  let request_body = JSON.stringify(form_data);

  try {
    const res = await API.post("/login", request_body, config);
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
    history.push("/");
    dispatch(create_alert("success", "Welcome Back"));
  } catch (error) {
    dispatch(create_alert("error", "Login Error"));
  }
};

export const logout = history => async dispatch => {
  dispatch({ type: LOGOUT_USER });
  history.push("/");
};

export const forgot_password = (form_data, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  let request_body = JSON.stringify(form_data);

  try {
    const res = await API.post("/forgot", request_body, config);
    history.push("/");
    dispatch(create_alert("success", "Check inbox for reset email"));
  } catch (error) {
    dispatch(create_alert("error", "Password update failed"));
  }
};

export const reset_password = (form_data, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  let request_body = JSON.stringify(form_data);

  try {
    const res = await API.post("/reset", request_body, config);
    history.push("/login");
    dispatch(create_alert("success", "Password Reset"));
  } catch (error) {
    dispatch(create_alert("error", "Password Reset Failed"));
  }
};
