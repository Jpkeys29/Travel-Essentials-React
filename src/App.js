import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem (id) {
    console.log(id)
    setItems(items => items.filter(item => item.id !== id))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> Travel Essentials ✈️</h1>
}


function Form({onAddItems}) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e){
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now()};
    // console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);

    }


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do I need for my trip? 🧐</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
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
function PackingList({items, onDeleteItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => <Item item={item} onDeleteItem={onDeleteItem} key={item.id}/>)}
      </ul>
    </div>
  );
}

function Item({item, onDeleteItem}) {
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