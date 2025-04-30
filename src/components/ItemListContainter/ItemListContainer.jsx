import { Alert, AlertIcon, AlertTitle, AlertDescription, Container} from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";

export const ItemListContainer = ({ products }) => {
    return products.length !== 0 ? (
    <Container width={"100vw"} height={"90vh"} fontSize={10}>
        {products.map((product) => {
            return (
                <ProductCard key={product.id} product={product}/>
            );
        })}
    </Container>
    ) : ( 
    <Alert status='info'>
        <AlertIcon />
        <AlertTitle>No hay productos para mostrar</AlertTitle>
        <AlertDescription></AlertDescription>
    </Alert>
    );
};