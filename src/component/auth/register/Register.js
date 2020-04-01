import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import brand_logo from "../../../assets/img/brand_logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { register_user } from "../../../actions/auth";

class Register extends Component {
  render() {
    const { values, errors, touched } = this.props;
    return (
      <div>
        <nav className="white">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <img
                src={brand_logo}
                alt="Brand Logo"
                className="responsive-img landing-brand-img"
              />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to={"/login"} className="red-text landing-nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/register"} className="red-text landing-nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="card col m8 offset-m2">
              <div className="row">
                <div className="col m12 center-align">
                  <h1>Register</h1>
                </div>
              </div>

              <div className="row">
                <div className="col m6 offset-m3">
                  <Form>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <Field
                          type="text"
                          id="first_name"
                          name="first_name"
                          className={errors.first_name ? "invalid" : ""}
                        />
                        <label htmlFor="first_name" className="active">
                          First Name
                        </label>
                        {errors.first_name && (
                          <span className="helper-text helper-text-error">
                            {errors.first_name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <Field
                          type="text"
                          id="last_name"
                          name="last_name"
                          className={errors.last_name ? "invalid" : ""}
                        />
                        <label htmlFor="last_name" className="active">
                          Last Name
                        </label>
                        {errors.last_name && (
                          <span className="helper-text helper-text-error">
                            {errors.last_name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          className={errors.email ? "invalid" : ""}
                        />
                        <label htmlFor="email" className="active">
                          Email
                        </label>
                        {errors.email && (
                          <span className="helper-text helper-text-error">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className={errors.password ? "invalid" : ""}
                        />
                        <label htmlFor="password" className="active">
                          Password
                        </label>
                        {errors.password && (
                          <span className="helper-text helper-text-error">
                            {errors.password}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <Field
                          type="password"
                          id="confirm_password"
                          name="confirm_password"
                          className={errors.confirm_password ? "invalid" : ""}
                        />
                        <label htmlFor="confirm_password" className="active">
                          Confirm Password
                        </label>
                        {errors.confirm_password && (
                          <span className="helper-text helper-text-error">
                            {errors.confirm_password}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <button className="btn btn-custom right" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues({
    first_name,
    last_name,
    email,
    password,
    confirm_password
  }) {
    return {
      first_name: first_name || "",
      last_name: last_name || "",
      email: email || "",
      password: password || "",
      confirm_password: confirm_password || ""
    };
  },

  validationSchema: Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string().required("Confirm Password is required")
  }),
  validateOnBlur: false,
  validateOnChange: false,
  handleSubmit: (values, props) => {
    const { setFieldError } = props;
    const { password, confirm_password } = values;

    if (password !== confirm_password) {
      setFieldError("confirm_password", "Passwords do not match");
    } else {
      props.props.register_user(values, props.props.history);
    }
  }
})(Register);

export default compose(connect(null, { register_user }), withRouter)(Formik);
