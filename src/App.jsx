import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { NavBar, IndexListContainer } from "./components";

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <IndexListContainer greeting={"Bienvenidos a mi tienda"}/>
    </ChakraProvider>
  );
};

export default App;
