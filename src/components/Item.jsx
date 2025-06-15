function Item({ item }) {
  return (
    <div className="itemCard">
      <img src={item.images[0]} alt={"item.title"} />
      <p>{item.title}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
}

export default Item;
