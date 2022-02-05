import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Shopping cart",
      keyword: "User Input Here",
    };
  }
  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      keyword: event.target.value ? event.target.value : "User Input Here",
    });
    this.props.userText(event.target.value);
  };

  render() {
    return (
      <div>
        <header>
          <center>
            <hr />
            <div className="logo"> {this.state.heading} </div>
            <input onChange={this.handleChange} />
            <div
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              {this.state.keyword}
            </div>
          </center>
        </header>
        <hr />
      </div>
    );
  }
}
export default Header;
