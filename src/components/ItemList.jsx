function ItemList({ items }) {
  return (
    <div className="itemListContainer">
      {items.map((item) => (
        <div key={item.id} className="itemCard">
          <img src={item.images[0]} alt={"item.title"} />
          <p>{item.title}</p>
          <p>Precio: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
