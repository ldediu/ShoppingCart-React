import React from "react";
import "../styles/CartItem.css";

function CartItem({ id, name, price, qty, updateQty }) {
  const plusOne = () => {
    updateQty(id, qty + 1);
  };
  const minusOne = () => {
    updateQty(id, qty - 1);
  };
  return (
    <div className="CartItem">
      <div>{name}</div>
      <div className="qtyDiv">
        <button onClick={minusOne} disabled={qty <= 0}>
          -
        </button>
        <p>{qty}</p>
        <button onClick={plusOne}>+</button>
      </div>
      <div className="priceDiv">${(qty * price).toFixed(2)}</div>
    </div>
  );
}

export default CartItem;
