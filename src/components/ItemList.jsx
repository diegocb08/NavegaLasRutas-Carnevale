import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="itemListContainer">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
