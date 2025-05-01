import { useParams } from "react-router-dom";
import { ItemDetailContainer, Loader } from "../components"
import { useProductById } from "../hooks";

export const Item = () => {
  const {itemId} = useParams()
  const {product, loading} = useProductById(itemId);
  return loading ? <Loader /> : <ItemDetailContainer product={product} />
};