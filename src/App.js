import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";

function App() {
  <Router>
    <Routes>
      <Route path="/" exact element={<Products />} />
    </Routes>
  </Router>;
  const Goods = ["rice", "beans", "garri", "yam"];
  const [products, setPoduct] = useState([
    {
      category: "glass",
      Image:
        "https://img.freepik.com/premium-photo/portrait-young-woman-using-mobile-phone_1048944-30344856.jpg",
      price: "$400",
    },
    {
      category: ["design", "red"],
      Image:
        "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
      price: "$400",
    },
    {
      category: ["design", "red"],
      Image:
        "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
      price: "$400",
    },
    {
      category: ["design", "red"],
      Image:
        "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
      price: "$400",
    },
    {
      category: ["design", "red"],
      Image:
        "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
      price: "$400",
    },
    {
      category: ["design", "red"],
      Image:
        "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
      price: "$400",
    },
  ]);
  return (
    <div className="App ">
      <h1>what do you think</h1>
      {Products.map((products) => {
        <Products
          name={products.category}
          price={products.price}
          Image={products.Image}
        />;
      })}
    </div>
  );
}

export default App;
