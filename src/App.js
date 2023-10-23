import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> Travel Essentials ✈️</h1>
}


function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQunatity] = useState(5);

  function handleSubmit(e){
    e.preventDefault();
    // setItem((currentItem) => currentItem + 1);
  }  

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do I need for my trip? 🧐</h3>
      <select value={quantity} onChange={e => setQunatity(e.target.value)}>
        {Array.from({ length : 20}, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}     
      </select>
      <input type="text" placeholder="Item" 
      value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );  
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => <Item item={item} key={item.id}/>)}
      </ul>
    </div>
  );
}

function Item({item}) {
  return (
    <li>
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button>🪓</button>
    </li>
  ) 
}

function Stats() {
  return (
    <footer className="stats">
      <em>I have X items on you my list, and I already packed x (X%) 🧳</em>
    </footer>
  );
}