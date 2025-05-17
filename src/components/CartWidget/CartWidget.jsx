import { Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useProductsStore } from "../../store";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {

    // const cartState = useCounterStore(store => store.cartState);
    const totalItems = useProductsStore((state) => state.getTotalItems())
    const navigate = useNavigate();

    
    return (
        <Flex alignItems={'center'} fontSize={20} marginRight={5} justifyContent={"space-between"} width={'50px'} onClick={() => navigate('/cart')}>
            <FaShoppingCart />
            {/* <div>{cartState}</div> */}
            <div>{totalItems}</div>
        </Flex>
    );
};