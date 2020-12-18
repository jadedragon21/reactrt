import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import AboutPage from "./components/AboutPage";
import NavBarPage from "./NavBarPage";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBarPage />
          <hr />
          <Route name="Home" exact path="/" component={HomePage} /> 
          <Route name="Menu" path="/menu" component={MenuPage} /> 
          <Route name="About" path="/about" component={AboutPage} />
          <hr />
        
      </Router>
      </div>
    );
  }
}
export default Routes;
