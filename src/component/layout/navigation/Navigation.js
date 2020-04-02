import React, { Component } from "react";
import brand_logo from "../../../assets/img/brand_logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    const { user } = this.props.auth;
    return (
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
                {user.first_name}
              </Link>
            </li>
            <li>
              <Link to={"/register"} className="red-text landing-nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Navigation);
