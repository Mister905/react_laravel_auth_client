import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import brand_logo from "../../../assets/img/brand_logo.png";
import { Link } from "react-router-dom";
import { reset_password } from "../../../actions/auth";

class ResetPassword extends Component {
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
                <Link
                  to={"/login"}
                  className="red-text bold-text landing-nav-link"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={"/register"}
                  className="red-text bold-text landing-nav-link"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-25">
          <div className="row">
            <div className="card col m8 offset-m2">
              <div className="row">
                <div className="col m12 center-align">
                  <h1>Reset Password</h1>
                </div>
              </div>
              <div className="row">
                <div className="col m6 offset-m3">
                  <Form>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className={errors.password ? "invalid" : ""}
                        />
                        <label htmlFor="password" className="active">
                          New Password
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
  mapPropsToValues({ password, confirm_password }) {
    return {
      password: password || "",
      confirm_password: confirm_password || ""
    };
  },

  validationSchema: Yup.object().shape({
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
      const { token } = props.props.match.params;
      props.props.reset_password(
        { token, password, confirm_password },
        props.props.history
      );
    }
  }
})(ResetPassword);

export default compose(connect(null, { reset_password }), withRouter)(Formik);
