import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import brand_logo from "../../../assets/img/brand_logo.png";
import { Link } from "react-router-dom";
import { login } from "../../../actions/auth";

class Login extends Component {
  render() {
    const { values, errors, touched } = this.props;
    return (
      <div>
        <nav className="white">
          <div className="nav-wrapper">
            <Link to={"/"} className="brand-logo">
              <img
                src={brand_logo}
                alt="Brand Logo"
                className="responsive-img landing-brand-img"
              />
            </Link>
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
                  <h1>Login</h1>
                </div>
              </div>

              <div className="row">
                <div className="col m6 offset-m3">
                  <Form>
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
                        <button className="btn btn-custom right" type="submit">Submit</button>
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
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required")
  }),
  validateOnBlur: false,
  validateOnChange: false,
  handleSubmit: (values, props) => {
    props.props.login(values, props.props.history);
  }
})(Login);

export default compose(connect(null, { login }), withRouter)(Formik);
