import "../App.css";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 3, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function AddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={AddItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onClear={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
