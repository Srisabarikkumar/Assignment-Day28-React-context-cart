/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../store/CartContext";

function NavbarComp({ showCartHandler }) {
  const cartCtx = useContext(CartContext);

  return (
    <nav className="navbar is-transparent is-dark is-flex is-justify-content-space-between">
      <div className="navbar-brand">
        <h5 style={{ color: "#fff" }} className="is-size-4 ml-5 mt-3 is-light">
          React Context Cart
        </h5>
      </div>

      <div id="navbarExampleTransparentExample">

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <button
                className="button is-primary mr-5"
                onClick={showCartHandler}
              >
                <span className="is-size-5">Cart ({cartCtx.items.length})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComp;
