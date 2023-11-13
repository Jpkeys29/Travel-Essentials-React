export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Time to pack! 🚀</em>
      </p>
    );
  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You are all set! 🧨 " :
          `I have ${numItems} items on you my list, and I already packed ${itemsPacked} (${percentage}%) 🧳`}
      </em>
    </footer>
  );
}
