import "./ItemListContainer.css";
import { useState, useEffect } from "react";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      async function getProducts() {
        const resp = await fetch("https://dummyjson.com/products");
        const fetchedData = await resp.json();

        if (!resp.ok) {
          throw new Error("Error en la solicitud de datos");
        }

        setItems(fetchedData.products); //
        console.log(fetchedData);
      }
      getProducts();
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  }, []);

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default ItemListContainer;
