import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

function ItemDetailContainer() {
  const [itemDetails, setItemDetails] = useState(null);
  const { itemId } = useParams();

  async function getProductDetails(itemId) {
    try {
      const resp = await fetch(`https://dummyjson.com/products/${itemId}`);
      const fetchedData = await resp.json();

      if (!resp.ok) {
        throw new Error(
          `Error en la solicitud de datos del producto: ${resp.status}`
        );
      }
      setItemDetails(fetchedData);
    } catch (error) {
      console.error(
        "Ha ocurrido un error al obtener los detalles del producto: ",
        error
      );
      setItemDetails(null);
    }
  }
  useEffect(() => {
    if (itemId) {
      getProductDetails(itemId);
    }
  }, [itemId]);
  return (
    <div>
      {itemDetails ? (
        <div>
          <h2>{itemDetails.title}</h2>
          <img src={itemDetails.thumbnail} alt={itemDetails.title} />
          <p>
            <strong>Precio:</strong> ${itemDetails.price}
          </p>
          <p>
            <strong>Descripción:</strong> {itemDetails.description}
          </p>
          <p>
            <strong>Categoría:</strong> {itemDetails.category}
          </p>
          <p>
            <strong>Stock:</strong> {itemDetails.stock}
          </p>
          <p>
            <strong>Rating:</strong> {itemDetails.rating}/5
          </p>
        </div>
      ) : (
        <div>
          <PuffLoader />
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
