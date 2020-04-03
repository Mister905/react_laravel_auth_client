import React, { Component } from "react";
import brand_logo from "../../../assets/img/brand_logo.png";
import { Link } from "react-router-dom";
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
            <li>
              <div className="nav-user-wrapper">
                <div className="icon baseline mr-5">
                  <svg viewBox="0 0 20 20" className="red-fill">
                    <path
                      id="icon-user"
                      d="M11.25 13.801v-1.031c1.377-0.776 2.5-2.71 2.5-4.645 0-3.107 0-5.625-3.75-5.625s-3.75 2.518-3.75 5.625c0 1.935 1.123 3.869 2.5 4.645v1.031c-4.24 0.347-7.5 2.43-7.5 4.949h17.5c0-2.519-3.26-4.602-7.5-4.949z"
                    ></path>
                  </svg>
                </div>
                <span className="bold-text laravel-red">{user.first_name}</span>
              </div>
            </li>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(
  connect(mapStateToProps, { logout }),
  withRouter
)(Navigation);
