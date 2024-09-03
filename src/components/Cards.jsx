/* eslint-disable react/prop-types */
import CardComp from "./Card";

function Cards({ products, btnAddToggle, added }) {

  return (
    <div className="container grid is-col-min-12 m-7 mt-5">
      {products.map((product) => (
        <CardComp
          key={product.id}
          product={product}
          added={added}
          btnAddToggle={btnAddToggle}
        />
      ))}
    </div>
  );
}

export default Cards;
