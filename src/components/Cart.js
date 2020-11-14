import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
import CartItem from "./CartItem";

function Cart({ myData }) {
  const initState = JSON.parse(window.localStorage.getItem("shopCartData"));
  const [data, setData] = useState(initState || myData);

  useEffect(() => {
    window.localStorage.setItem("shopCartData", JSON.stringify(data));
  }, [data]);

  const updateQty = (id, updatedQty) => {
    const newData = data.map((item) => {
      return item.id === id ? { ...item, qty: updatedQty } : item;
    });
    setData(newData);
  };

  const clearAll = () => {
    const newData = data.map((item) => {
      return { ...item, qty: 0 };
    });
    setData(newData);
  };

  const totalSum = data
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="Cart">
      {data.map((item) => {
        return <CartItem key={item.id} {...item} updateQty={updateQty} />;
      })}
      <h2>Total: {totalSum}</h2>
      <div className="btnsDiv">
        <button className="clearBtn" onClick={clearAll}>
          Clear
        </button>
        <button
          className="buyBtn"
          onClick={() => alert("Thanks for the purchase")}
          disabled={totalSum <= 0}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Cart;
