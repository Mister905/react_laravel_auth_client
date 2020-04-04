import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { create_product } from "../../../actions/product";

class Create extends Component {
  render() {
    const { values, errors, touched, setFieldValue } = this.props;
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
                          className={
                            errors.brand
                              ? "invalid custom-input"
                              : "custom-input"
                          }
                        />
                        <label
                          htmlFor="brand"
                          className="active custom-input-label"
                        >
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
                          className={
                            errors.name
                              ? "invalid custom-input"
                              : "custom-input"
                          }
                        />
                        <label
                          htmlFor="name"
                          className="active custom-input-label"
                        >
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
                        <Field
                          component="textarea"
                          id="description"
                          name="description"
                          className={
                            errors.description
                              ? "invalid materialize-textarea"
                              : "materialize-textarea"
                          }
                        />
                        <label htmlFor="description" className="active">
                          Description
                        </label>
                        {errors.description && (
                          <span className="helper-text helper-text-error">
                            {errors.description}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="file-field input-field custom-input-field">
                      <div className="btn btn-custom btn-product-image">
                        <span>
                          <div className="icon baseline">
                            <svg viewBox="0 0 20 20">
                              <path
                                id=""
                                d="M18 3h-16c-0.553 0-1 0.447-1 1v12c0 0.552 0.447 1 1 1h16c0.553 0 1-0.448 1-1v-12c0-0.552-0.447-1-1-1zM13.25 6.5c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25-1.25-0.56-1.25-1.25 0.56-1.25 1.25-1.25zM4 14l3.314-7.619 3.769 6.102 3.231-1.605 1.686 3.122h-12z"
                              ></path>
                            </svg>
                          </div>
                        </span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          onChange={(event) => {
                            setFieldValue(
                              "image",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
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
  mapPropsToValues({ brand, name, description, image }) {
    return {
      brand: brand || "",
      name: name || "",
      description: description || "",
      image: image || null,
    };
  },

  validationSchema: Yup.object().shape({
    brand: Yup.string().required("Brand is required"),
    name: Yup.string().required("Name is required"),
  }),
  validateOnBlur: false,
  validateOnChange: false,
  handleSubmit: (values, props) => {
    props.props.create_product(values, props.props.history);
  },
})(Create);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(
  connect(mapStateToProps, { create_product }),
  withRouter
)(Formik);
