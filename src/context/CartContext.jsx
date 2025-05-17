import React, { createContext } from "react";

export const CartContext = createContext();

export const CardProvider = ({ children }) => {

    const [cartState, setCartState] = useState(0);

    const handleAdd = () => {
        setCartState(cartState + 1);
    }

    const handleRemove = () => {
        setCartState(cartState - 1);
    }

    return (
        <CartContext.Provider value={{cartState, setCartState, handleAdd, handleRemove}}>
            {children}
        </CartContext.Provider>
    )
}
