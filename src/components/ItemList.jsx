import Item from "./item";

function ItemList({ items }) {
  return (
    <div className="itemListContainer">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}

export default ItemList;
