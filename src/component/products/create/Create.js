import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
// import { register } from "../../../actions/auth";

class Create extends Component {
  render() {
    const { values, errors, touched } = this.props;
    return (
      <div>
        <div className="container mt-25">
          <div className="row">
            <div className="card col m8 offset-m2">
              <div className="row">
                <div className="col m12 center-align">
                  <h1>Create Product</h1>
                </div>
              </div>

              <div className="row">
                <div className="col m6 offset-m3">
                  <Form>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <Field
                          type="text"
                          id="brand"
                          name="brand"
                          className={errors.brand ? "invalid" : ""}
                        />
                        <label htmlFor="brand" className="active">
                          Brand
                        </label>
                        {errors.brand && (
                          <span className="helper-text helper-text-error">
                            {errors.brand}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className={errors.name ? "invalid" : ""}
                        />
                        <label htmlFor="name" className="active">
                          Name
                        </label>
                        {errors.name && (
                          <span className="helper-text helper-text-error">
                            {errors.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field custom-input-field col m12">
                        <button
                          className="btn btn-custom bold-text right"
                          type="submit"
                        >
                          Create
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
  mapPropsToValues({ brand, name }) {
    return {
      brand: brand || "",
      name: name || "",
    };
  },

  validationSchema: Yup.object().shape({
    brand: Yup.string().required("Brand is required"),
    name: Yup.string().required("Name is required"),
  }),
  validateOnBlur: false,
  validateOnChange: false,
  handleSubmit: (values, props) => {
    // props.props.register(values, props.props.history);
  },
})(Create);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(
  connect(mapStateToProps, {  }),
  withRouter
)(Formik);
