const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "Charger", quantity: 12, packed: true },
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
  return <div className="add-form">
    <h3>What do I need for my trip? 🧐</h3>
  </div>
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => <Item item={item} />)}
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