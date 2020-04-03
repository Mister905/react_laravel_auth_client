import React, { Component } from "react";
import brand_logo from "../../assets/img/brand_logo.png";
import landing_image from "../../assets/img/landing_image.png";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
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
            <div className="col m12 center-align">
              <h1>React Laravel Authentication</h1>
            </div>
          </div>
          <div className="row">
            <div className="col m4 offset-m4">
              <img
                src={landing_image}
                alt="Laravel Logo"
                className="responsive-img"
              />
            </div>
          </div>
          <div className="row">
            <div className="col m12 center-align">
              <Link to={"/forgot-password"} className="laravel-red forgot-password-link bold-text">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
