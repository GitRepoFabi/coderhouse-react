import { useParams } from "react-router-dom";
import { ItemDetailContainer, Loader } from "../components"
import { useProductById, useTitle } from "../hooks";

export const Item = () => {
  const {itemId} = useParams()
  const {product, loading} = useProductById(itemId);

  useTitle({title:"Detalle del producto"})

  return loading ? <Loader /> : <ItemDetailContainer product={product} />
};