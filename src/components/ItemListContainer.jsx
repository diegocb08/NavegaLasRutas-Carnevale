import "./ItemListContainer.css";

function ItemListContainer(props) {
	return (
		<div className="mensaje-bienvenida-container">
			<h2 className="bienvenida">{props.bienvenida}</h2>
			<p className="mensaje">{props.mensaje}</p>
		</div>
	);
}

export default ItemListContainer;
