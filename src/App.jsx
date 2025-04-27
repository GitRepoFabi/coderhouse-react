import { useEffect, useState } from "react";
import { Button, ChakraProvider, Container, Flex, Input } from '@chakra-ui/react';
import { NavBar, IndexListContainer, Loader } from "./components";
import { getProducts, searchProducts } from "./services/queries";

const App = () => {

  const [products, setProducts] = useState([]);  //Para mostrar los productos
  const [loading, setLoading] = useState(true); //Para que muestre el cargando mientras carga la API
  const [search, setSearch] = useState(""); //Para almacenar la búsqueda del usaurio

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => setLoading(false));
  }, []);

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
    <ChakraProvider>
      <NavBar />
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
          <IndexListContainer products={products} />
        )
      }

    </ChakraProvider>
  );
};

export default App;
