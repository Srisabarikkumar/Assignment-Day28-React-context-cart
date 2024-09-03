/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../store/CartContext";

function CardComp({ product }) {
  const cartCtx = useContext(CartContext);

  const cartAddItemHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  return (
    <div className="card m-5">
      <div className="card-image">
        <figure className="image is-1by1">
          <img
            className="has-background-primary"
            src={product.image}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5 mb-3">{product.title}</p>
            <p className="subtitle is-6">Rs. {product.price}</p>
          </div>
        </div>

        <div className="content">{product.description}</div>
      </div>
      <div className="is-flex is-justify-content-center ml-5 mr-5 mb-5">
        <button
          onClick={() => {
            cartAddItemHandler(product);
          }}
          className="button is-primary is-normal is-fullwidth ml-3 mr-3"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default CardComp;
