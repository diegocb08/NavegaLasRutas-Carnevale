import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer
				bienvenida="Hola, bienvenidos a la tienda!"
				mensaje="Próximamente todos nuestros productos"
			/>
		</>
	);
}

export default App;
