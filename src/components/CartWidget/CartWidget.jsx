import { Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    return (
    <Flex alignItems={'center'} fontSize={20} marginRight={5} justifyContent={"space-between"} width={'50px'} >
        <FaShoppingCart />
        <div>0</div>
    </Flex>
    );
};