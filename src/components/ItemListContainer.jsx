import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer() {
  const [items, setItems] = useState([]);

  async function getProducts() {
    try {
      const resp = await fetch("https://dummyjson.com/products");
      const fetchedData = await resp.json();

      if (!resp.ok) {
        throw new Error("Error en la solicitud de datos de productos");
      }

      setItems(fetchedData.products);
      console.log(fetchedData);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return <ItemListWithLoading items={items} />;
}

export default ItemListContainer;
