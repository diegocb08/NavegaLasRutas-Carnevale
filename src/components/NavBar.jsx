import CartWidget from "./CartWidget";
import "./NavBar.css";
import { useEffect, useState } from "react";

function NavBar() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const resp = await fetch("https://dummyjson.com/products/category-list");
      const fetchedData = await resp.json();

      if (!resp.ok) {
        throw new Error("Error en la solicitud de datos de categorias");
      }

      setCategories(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <nav className="nav-container">
      <h1>E-Commerce</h1>
      <select className="categorias">
        <option className="categoria" disabled>
          Selecciona una categoría
        </option>
        {categories.map((categorie) => (
          <option className="categoria" key={categorie} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
