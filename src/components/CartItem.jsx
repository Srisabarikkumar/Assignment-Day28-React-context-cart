/* eslint-disable react/prop-types */
import classes from "./cartItem.module.css";

function CartItem({ item, cartAddItemHandler, cartRemoveItemHandler }) {
  const price = `Rs. ${item.price.toFixed(2)}`;

  return (
    <>
      <div className="m-5">
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <div className="is-flex">
              <div className="mr-5">
                <img
                  src={item.image}
                  width={50}
                  alt="product-image"
                />
              </div>
              <div>
                <h2 className="is-size-5">{item.title}</h2>
                <div>
                  <span className="is-size-6">{price}</span>
                  <span className="is-size-6">{" "}x {item.amount}</span>
                </div>
              </div>
            </div>
            <div className={`${classes.btnDiv} ml-3`}>
              <button
                className={classes.btn}
                onClick={() => {
                  cartRemoveItemHandler(item.id);
                }}
              >
                -
              </button>
              <p className={`${classes.para}`}>{item.amount}</p>
              <button
                className={classes.btn}
                onClick={() => {
                  cartAddItemHandler(item);
                }}
              >
                +
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CartItem;
