import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

import { Link } from "react-router-dom";
import Counter from "./Counter";

class Root extends Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <p>This is the home page.</p>
        <p>
          Check out the fun <Link to="/counter1">counter</Link>.
        </p>
      </div>
    );
  }
}

export default Root;
