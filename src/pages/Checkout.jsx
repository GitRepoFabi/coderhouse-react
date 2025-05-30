import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Box, Button, FormControl, Input, Text,VStack } from "@chakra-ui/react";
import { db } from "../services";
import { useProductsStore } from "../store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks";

export const Checkout = () => {

    useTitle({ title: "Checkout" });

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const cartState = useProductsStore(state => state.cart)
    const total = useProductsStore(state => state.getTotalPrice())
    const deleteProductFromcart = useProductsStore((state) => state.deleteProductFromcart);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            buyer: form,
            items: cartState.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            total: total
        }

        const collectionName = collection(db, 'orders');

        addDoc(collectionName, data)
            .then(({ id }) => {
                cartState.map((item) => (deleteProductFromcart(item.id)))
                Swal.fire({
                    title: "Compra exitosa!",
                    text: `Por cualquier reclamo, indicar el siguiente número de compra: ${id}`,
                    icon: "success",
                    draggable: true,
                    confirmButtonText: "Listo",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                    }
                });
            })
            .catch((error) => console.error(error))
    };

    return (
        <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
            <form onSubmit={(e) => handleSubmit(e)}>
                <VStack spacing={6}>
                    <Text fontSize={"2xl"} mb={"5px"} fontWeight={"800"}>
                        Finalizar Compra
                    </Text>
                    <FormControl isRequired>
                        <Text mb={"5px"}>Nombre completo</Text>
                        <Input
                            type={"text"}
                            onChange={(e) => {
                                setForm({ ...form, name: e.target.value });
                            }}
                            placeholder="Nombre"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <Text mb={"5px"}>Teléfono</Text>
                        <Input
                            type={"phone"}
                            onChange={(e) => {
                                setForm({ ...form, phone: e.target.value });
                            }}
                            placeholder="Teléfono"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <Text mb={"5px"}>Correo electrónico</Text>
                        <Input
                            type={"email"}
                            onChange={(e) => {
                                setForm({ ...form, email: e.target.value });
                            }}
                            placeholder="Correo electrónico"
                        />
                    </FormControl>

                    <Button type="submit" colorScheme="blue">
                        Comprar
                    </Button>
                </VStack>
            </form>
        </Box>
    )
}
