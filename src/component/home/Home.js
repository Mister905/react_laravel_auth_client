import React, { Component } from "react";
import Navigation from "../layout/navigation/Navigation";
import Rick from "../../assets/img/rick.gif";

class Home extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="card col m12">
              <div className="row">
                <div className="col m12 center-align">
                  <h1>Home</h1>
                  <h2>You are logged in!</h2>
                </div>
              </div>
              <div className="row">
                <div className="col m4 offset-m4 center-align">
                  <img src={Rick} alt="Rick Astley" />
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
