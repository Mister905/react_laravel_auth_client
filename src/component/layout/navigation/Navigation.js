import React, { Component } from "react";
import brand-logo from '../../../assets/img/brand-logo.png';

class Navigation extends Component {
  render() {
    return (
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              <img src={brand-logo} alt="Brand Logo"/>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navigation;
