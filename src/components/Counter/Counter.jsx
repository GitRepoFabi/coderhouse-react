import { Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useProductsStore } from "../../store";
// import { useCounterStore } from "../../store";

export const Counter = ({ product }) => {

  //Store Zustand
  // const addProduct = useCounterStore(store => store.addProduct);
  // const removeProduct = useCounterStore(store => store.removeProduct);
  // const cartState = useCounterStore(store => store.cartState);

  const addProductToCart = useProductsStore((state) => state.addProductToCart);
  const removeProductFromCart = useProductsStore((state) => state.removeProductFromCart);
  const cart = useProductsStore((state) => state.cart);

  //Contador local
  // const [count, setCount] = useState(0);

  const handleAdd = () => {
    // addProduct();
    addProductToCart(product)
    console.log(cart);
    // setCount(count + 1);
  };

  const handleRemove = () => {
    // if (cartState === 0) return
    // removeProduct();

    removeProductFromCart(product.id)
    console.log(cart);
    // setCount(count - 1);
  };

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Button onClick={handleRemove}>-</Button>
      {/* <Text fontSize={30} margin={"0 10px 0 10px"}>{count}</Text> */}
      <Button onClick={handleAdd}>+</Button>
    </Flex>
  )
}
