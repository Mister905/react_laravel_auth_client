import React, { Component } from "react";
import Navigation from "../layout/navigation/Navigation";
import Rick from "../../assets/img/rick.gif";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="container mt-25">
          <div className="row">
            <div className="card col m12">
              <div className="row">
                <div className="col m12 center-align">
                  <h1>Laravel React Authentication</h1>
                </div>
              </div>
              <div className="row">
                <div className="col m4 offset-m4 center-align">
                  <img src={Rick} alt="Rick Astley" />
                </div>
              </div>
              <div className="row">
                <div className="col m4 offset-m4 center-align">
                  <Link
                    to="/products"
                    className="btn btn-wide btn-custom btn-product-list"
                  >
                    <div className="icon baseline mr-5">
                      <svg viewBox="0 0 20 20">
                        <path
                          id="icon-info"
                          d="M12.432 0c1.34 0 2.010 0.912 2.010 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-0.75-1.974-1.99 0-1.043 0.881-2.479 2.643-2.479zM8.309 20c-1.058 0-1.833-0.652-1.093-3.524l1.214-5.092c0.211-0.814 0.246-1.141 0-1.141-0.317 0-1.689 0.562-2.502 1.117l-0.528-0.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273 0.705 3.23l-1.391 5.352c-0.246 0.945-0.141 1.271 0.106 1.271 0.317 0 1.357-0.392 2.379-1.207l0.6 0.814c-2.502 2.547-5.235 3.527-6.291 3.527z"
                        ></path>
                      </svg>
                    </div>
                    Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
