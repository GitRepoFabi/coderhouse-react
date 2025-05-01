import { useEffect, useState } from "react"
import { getProductById, getProductsByCategory } from "../services";

export const useProductsByCategory = (id) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        getProductsByCategory(id)
        .then((res) => {
            setProducts(res.data.products);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => setLoading(false))
    }, [id])

    return {products, loading};
}

export const useProductById = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
        .then((res) => {
            setProduct(res.data);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => setLoading(false))
    },[id])

    return {product, loading}
}