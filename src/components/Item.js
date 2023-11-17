export default function Item({ itemobj, onDelete, onToggle }) {
    return (
      <li>
        <input
          type="checkbox"
          value={itemobj.packed}
          onChange={() => {
            onToggle(itemobj.id);
          }}
        />
        <span style={itemobj.packed ? { textDecoration: "line-through" } : {}}>
          {itemobj.quantity} {itemobj.description}
        </span>
        <button onClick={() => onDelete(itemobj.id)}>❌</button>
      </li>
    );
  }