import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  function handleClick() {
    setItems((prev) => {
      return [...prev, item];
    });
    setItem("");
  }
  function handleInput(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
