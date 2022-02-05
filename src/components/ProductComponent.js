import react from "react";

const ProductDisplay = (props) => {
  console.log(props);

  const renderProduct = props.dispData.map((item) => {
    return (
      <div>
        <center>
          <h2>{item.name}</h2>
          <p>{item.brand}</p>
        </center>
      </div>
    );
  });

  return <div className="main">{renderProduct}</div>;
};
export default ProductDisplay;
