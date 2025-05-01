import { useParams } from "react-router-dom";
import { ItemListContainer, Loader } from "../components"
import { useProductsByCategory} from "../hooks";

export const Category = () => {
  const {categoryId} = useParams();
  const {products, loading} = useProductsByCategory(categoryId);
  return (
    loading ? (
      <Loader />
    ) : (
      <ItemListContainer products={products} />
    )
  )
}
