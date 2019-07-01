import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
  render() {
    return (
      <div className="navigationDiv">
        <div className="navigationBar">
          <NavLink to="/"><img src={require("../../img/logo.png")} alt="logo"  className="logoButton"/></NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
      </div>
    );
  }
}

export default TopNavigation;