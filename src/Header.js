import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Data Scientist",
      keyword: "User Input Here",
    };
  }
  handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      this.setState({ keyword: event.target.value });
    } else {
      this.setState({ keyword: "User Input Here" });
    }
  };

  render() {
    return (
      <div>
        <header>
          <center>
            <hr />
            <div className="logo"> {this.state.heading}</div>
            <input onChange={this.handleChange} />
            <div> {this.state.keyword}</div>
          </center>
        </header>
        <hr />
      </div>
    );
  }
}
export default Header;
