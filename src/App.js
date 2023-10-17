export default function App() {
  return (
    <div>
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
  return <div className="list">My List</div>
}
function Stats() {
  return (
    <footer className="stats">
      <em>I have X items on you my list, and I already packed x (X%) 🧳</em>
    </footer>
  );
}