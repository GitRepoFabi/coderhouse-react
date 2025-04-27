import { Container, Flex, Text } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";

export const IndexListContainer = ({ products }) => {
    return (
        <Container width={"100vw"} height={"90vh"} fontSize={10}>
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product}/>
                );
            })}
        </Container>
    );
};