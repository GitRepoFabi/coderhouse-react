import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Button, Input } from "@chakra-ui/react";
import { db } from "../services";
import { useProductsStore } from "../store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const cartState = useProductsStore(state => state.cart)
    const total = useProductsStore(state => state.getTotalPrice())

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
        <form onSubmit={(e) => handleSubmit(e)}>
            <Input type='text' placeholder='Nombre' onChange={(e) => { setForm({ ...form, name: e.target.value }) }} />
            <Input type='phone' placeholder='Telefono' onChange={(e) => { setForm({ ...form, phone: e.target.value }) }} />
            <Input type='email' placeholder='Correo electrónico' onChange={(e) => { setForm({ ...form, email: e.target.value }) }} />
            <Button type='submit'>Comprar</Button>
        </form>
    )
}
