import CartWidget from "./CartWidget";
import "./NavBar.css";
import { useEffect, useState } from "react";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((cat) => setCategories(cat));
  }, []);
  return (
    <nav className="nav-container">
      <h1>E-Commerce</h1>
      <select className="categorias" defaultValue="">
        <option value="" disabled>
          Selecciona una categoría
        </option>
        {categories.map((categorie) => (
          <option key={categorie} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
