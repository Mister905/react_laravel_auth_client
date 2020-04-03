import React, { Component } from "react";
import brand_logo from "../../../assets/img/brand_logo.png";
import { Link } from "react-router-dom";
import NavSpinner from "../nav_spinner/NavSpinner";
import { logout } from "../../../actions/auth";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

class Navigation extends Component {
  handle_logout = () => {
    this.props.logout(this.props.history);
  };
  render() {
    const { user, loading_user } = this.props.auth;
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
          <ul id="nav-mobile" className="right hide-on-med-and-down flex">
            {!user ? (
              <li className="nav-spinner">
                <NavSpinner />
              </li>
            ) : (
              <li>
                <div className="nav-user-wrapper">
                  <svg
                    className="vertical-align-middle"
                    width="22"
                    height="22"
                    viewBox="0 0 32 32"
                  >
                    <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                  </svg>
                  <span className="nav-user bold-text laravel-red vertical-align-middle">
                    {user.first_name}
                  </span>
                </div>
              </li>
            )}
            <li>
              <a
                onClick={this.handle_logout}
                className="red-text bold-text landing-nav-link"
              >
                Logout
              </a>
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

export default compose(
  connect(mapStateToProps, { logout }),
  withRouter
)(Navigation);
