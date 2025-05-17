import { Button, Container, Flex, Input } from "@chakra-ui/react"
import { ItemListContainer, Loader } from "../components"
import { getProducts, searchProducts } from "../services/queries";
import { useEffect, useState } from "react";
import {useProducts, useTitle} from "../hooks"

export const Home = () => {

  const { products, loading, setProducts, setLoading } = useProducts();
    const [search, setSearch] = useState(""); //Para almacenar la búsqueda del usuario

    useTitle({title:'Inicio'});
  
    //Constante creada para la búsqueda de productos
    const handleclickSearch = () => {
      setLoading(true);
      searchProducts(search)
        .then((res) => {
          setProducts(res.data.products)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  
    const handleclickReset = () => {
      setLoading(true)
      getProducts()
      .then((res) => {
        setProducts(res.data.products)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() =>setLoading(false));
    }

  return (
    <>
      <Container>
        <Input 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Producto a buscar"
          width={'50%'}
          margin={'30px'}
          alignItems={'center'}>
        </Input>

        <Button onClick={handleclickSearch} margin={'5px'}>Buscar</Button>
        <Button onClick={handleclickReset} margin={'10px'}>Reset</Button>
      </Container>
      {
        loading ? (
          <Loader />
        ) : (
          <ItemListContainer products={products} />
        )
      }
      </>
  )
}
