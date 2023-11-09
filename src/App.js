import { useState } from "react";


export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem (id) {
    console.log(id)
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleCheckItem (id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item ));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onCheckItem={handleCheckItem} />
      <Stats items={items}/>
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

function PackingList({items, onDeleteItem, onCheckItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => <Item item={item} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem} key={item.id}/>)}
      </ul>
      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

function Item({item, onDeleteItem, onCheckItem}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onCheckItem(item.id)}/>
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>🪓</button>
    </li>
  ) 
}

function Stats({items}) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Time to pack! 🚀</em>
      </p>
    );
  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked/numItems)*100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You are all set! 🧨 " :
        `I have ${numItems} items on you my list, and I already packed ${itemsPacked} (${percentage}%) 🧳`}
      </em>
    </footer>
  );
}