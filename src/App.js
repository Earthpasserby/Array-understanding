import React from "react";
import "./App.css";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";

function App() {
  <Router>
    <Routes>
      <Route path="/" exact element={<Products />} />
    </Routes>
  </Router>;
  const products = [
    {
      category: ["glass"],
      Image: [
        "https://img.freepik.com/premium-photo/portrait-young-woman-using-mobile-phone_1048944-30344856.jpg",
      ],
      price: ["$400"],
    },

    {
      category: ["watch"],
      Image: [
        "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
      ],
      price: ["$400"],
    },

    {
      category: ["belt"],
      Image: [
        "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
      ],
      price: ["$400"],
    },
  ];
  // const [products, setPoduct] = useState([
  //   {
  //     category: "glass",
  //     Image:
  //       "https://img.freepik.com/premium-photo/portrait-young-woman-using-mobile-phone_1048944-30344856.jpg",
  //     price: "$400",
  //   },
  //   {
  //     category: ["design", "red"],
  //     Image:
  //       "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
  //     price: "$400",
  //   },
  //   {
  //     category: ["design", "red"],
  //     Image:
  //       "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
  //     price: "$400",
  //   },
  //   {
  //     category: ["design", "red"],
  //     Image:
  //       "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
  //     price: "$400",
  //   },
  //   {
  //     category: ["design", "red"],
  //     Image:
  //       "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
  //     price: "$400",
  //   },
  //   {
  //     category: ["design", "red"],
  //     Image:
  //       "https://img.freepik.com/premium-photo/business-people-working-office_1048944-30369177.jpg?w=900",
  //     price: "$400",
  //   },
  // ]);
  return (
    <div className="App ">
      {products.map((product) => (
        <div>
          <h1>{product.category}</h1>
          <p>{product.Image}</p>
        </div>
      ))}
    </div>
  );
}

const mango = {
  color: "yellow",
  price: "400",
  length: "50",
  item: "rice",
  about: function () {
    //return 'This '+this.item+' is '+this.price+' Nigerian naira.'
    return `This ${this.color}, ${this.item} is ${this.price} naira  and  is ${this.length} in length`;
  },
};
console.log(mango.about());

function great() {
  for (var i = 0; i < 4; i++) {
    console.log("learning");
  }
  // console.log(i);
}
great();
export default App;
