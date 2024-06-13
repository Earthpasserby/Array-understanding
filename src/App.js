import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setPoduct] = useState(
    [{category:'glass', Image:'', price:'$400'},
      {category:'glass', Image:'', price:'$400'}
    ]
  );
  return (
    <div className="App">
      <h1>what do you think</h1>
    </div>
  );
}

export default App;
