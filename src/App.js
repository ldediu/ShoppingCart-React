import React from "react";
import Cart from "./components/Cart";
import myData from "./data";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Cart myData={myData} />
    </div>
  );
}

export default App;
