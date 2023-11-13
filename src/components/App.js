import { useState } from "react";
import Logo from './Logo';
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";


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

