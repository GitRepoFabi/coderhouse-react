import { Alert, AlertIcon, AlertTitle, AlertDescription, Container, Box, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";

export const ItemListContainer = ({ products }) => {
    return products.length !== 0 ? (
        // <Container width={"100vw"} height={"90vh"} fontSize={10}>
        //     {products.map((product) => {
        //         return (
        //             <ProductCard key={product.id} product={product}/>
        //         );
        //     })}
        // </Container>
        <Box width={"100%"} overflowX={"hidden"} p={4}>
            <SimpleGrid columns={{lg:3}} spacing={4} width={"100%"}>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </SimpleGrid>
        </Box>
    ) : (
        <Alert status='info'>
            <AlertIcon />
            <AlertTitle>No hay productos para mostrar</AlertTitle>
            <AlertDescription></AlertDescription>
        </Alert>
    );
};