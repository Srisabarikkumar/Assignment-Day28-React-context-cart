/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CartItem from "./cartItem";
import Modal from "./Modal";
import classes from "./Cart.module.css";

function Cart({ showCartHandler, onClose }) {
  const cartCtx = useContext(CartContext);

  const cartAddItemHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const cartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const clearCartHandler = () => {
    cartCtx.clearCart();
  }

  return (
    <>
      <Modal onClose={onClose}>
        <h1 className="is-size-4 mb-3 ml-5">
          <strong>Cart Items ({cartCtx.items.length})</strong>
        </h1>
        <div className={classes.list}>
          {cartCtx.items.length === 0 ? (
            <p className="is-size-5 m-5" style={{ textAlign: "center" }}>
              Your cart is empty!
            </p>
          ) : (
            cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                cartAddItemHandler={cartAddItemHandler}
                cartRemoveItemHandler={cartRemoveItemHandler}
              />
            ))
          )}
        </div>
        <div className="is-flex is-justify-content-space-between mt-3 mb-3 ml-5 mr-5">
          <p className="is-size-5">
            <strong>Total Amount:</strong> Rs. {cartCtx.totalAmount.toFixed(2)}
          </p>
          <div>
            <button className="button is-primary" onClick={clearCartHandler}>
              Clear cart
            </button>
            <button
              className="button is-primary ml-3"
              onClick={showCartHandler}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
