import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import NewsDisplay from "./NewsComponent";

const Home = () => {
  return (
    <div>
      <Header />
      <h1> Hello World </h1>
      <h2> Raghavender Sridhar </h2>
      <NewsDisplay></NewsDisplay>
      <Footer year="2022"> </Footer>
    </div>
  );
};
export default Home;
