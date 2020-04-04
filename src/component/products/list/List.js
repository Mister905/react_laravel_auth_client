import React, { Component } from "react";
import Navigation from "../../layout/navigation/Navigation";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Preloader from "../../layout/preloader/Preloader";
import { get_products } from "../../../actions/product";

class List extends Component {
  componentDidMount = () => {
    this.props.get_products();
  };
  render_list = () => {
    const { products, loading_products } = this.props.product;
    if (loading_products) {
      return (
        <div className="row">
          <div className="col m12 center-align">
            <Preloader />
          </div>
        </div>
      );
    } else {
      if (products.length === 0) {
        return (
          <div className="row">
            <div className="col m12 center-align">
              <p className="no-products-message">There are no products</p>
            </div>
          </div>
        );
      } else {
        return (
          <ul>
            {products.map((product) => {
              return (
                <div className="row">
                  <div className="col m6 offset-m3">
                    <div className="card">
                      <div className="card-image">
                        <img
                          src={`http://auth.test/storage/product_images/${product.image}`}
                        />
                        <span className="card-title">
                          {product.brand} {product.name}
                        </span>
                      </div>
                      <div className="card-content">
                        <p>{product.description}</p>
                      </div>
                      <div className="card-action">
                        <a href="#">This is a link</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        );
      }
    }
  };
  render() {
    return (
      <div className="container mt-25">
        <div className="row">
          <div className="card col m12">
            <div className="row">
              <div className="col m4 offset-m4 center-align">
                <h1>Product List</h1>
              </div>
              <div className="col m4 center-align">
                <Link
                  to={"/products/create"}
                  className="btn btn-custom btn-add-product"
                >
                  <div className="icon baseline">
                    <svg viewBox="0 0 20 20">
                      <path
                        id="icon-info"
                        d="M19.375 7.5h-6.875v-6.875c0-0.345-0.28-0.625-0.625-0.625h-3.75c-0.345 0-0.625 0.28-0.625 0.625v6.875h-6.875c-0.345 0-0.625 0.28-0.625 0.625v3.75c0 0.345 0.28 0.625 0.625 0.625h6.875v6.875c0 0.345 0.28 0.625 0.625 0.625h3.75c0.345 0 0.625-0.28 0.625-0.625v-6.875h6.875c0.345 0 0.625-0.28 0.625-0.625v-3.75c0-0.345-0.28-0.625-0.625-0.625z"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            {this.render_list()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { get_products })(List);
