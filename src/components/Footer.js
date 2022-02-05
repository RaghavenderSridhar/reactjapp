import React from "react";

const Footer = (props) => {
  console.log(props);
  return (
    <div>
      <center>
        <h3> &copy; Shopping cart details {props.year} </h3>{" "}
      </center>{" "}
      <hr />
    </div>
  );
};

export default Footer;
