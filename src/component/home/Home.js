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
                  <Link to="/products" className="btn btn-wide">
                    64px ABC
                    <div className="icon baseline">
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          id="icon-info"
                          d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"
                        ></path>
                      </svg>
                    </div>
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
