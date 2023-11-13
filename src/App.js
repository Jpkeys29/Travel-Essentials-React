import { useState } from "react";
import Logo from './Logo';
import Form from "./Form";
import PackingList from "./PackingList";


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

  function handleClearList () {
    const confirmation = window.confirm("Are you sure you want to delete all items?");
    if (confirmation) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList 
      items={items} 
      onDeleteItem={handleDeleteItem} 
      onCheckItem={handleCheckItem} 
      onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
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