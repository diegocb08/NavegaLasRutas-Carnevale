import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
	return (
		<nav className="nav-container">
			<h1>E-Commerce</h1>
			<ul className="categorias">
				<li>
					<a href="#">Categoría 1</a>
				</li>
				<li>
					<a href="#">Categoría 2</a>
				</li>
				<li>
					<a href="#">Categoría 3</a>
				</li>
			</ul>
			<CartWidget />
		</nav>
	);
}

export default NavBar;
