import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ProductDisplay from "./ProductComponent";
import JSON from "./db.json";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      prodData: JSON,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <ProductDisplay dispData={this.state.prodData} />
        <Footer year="2022"> </Footer>
      </div>
    );
  }
}

export default Home;
