import {
    Box,
    Heading,
    Alert,
    AlertIcon,
    VStack,
    Flex,
    Text,
    HStack,
    IconButton,
    Spacer,
    Divider,
    Button,
    Image,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useProductsStore } from "../store";
import { useTitle } from "../hooks";

export const Cart = () => {

    useTitle({title:"Carrito"});

    const cartState = useProductsStore((state) => state.cart);
    const addItem = useProductsStore((state) => state.addProductToCart);
    const removeItem = useProductsStore((state) => state.removeProductFromCart);
    const deleteProductFromcart = useProductsStore((state) => state.deleteProductFromcart);
    const total = useProductsStore((state) => state.getTotalPrice());

    const handleDeleteItem = (itemId) => {
        deleteProductFromcart(itemId);
    };

    return (
        <Box p={6} maxW="800px" mx="auto" h={"90vh"}>
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Detalle del Carrito
            </Heading>

            {cartState.length === 0 ? (
                <Alert status="info" borderRadius="md">
                    <AlertIcon />
                    Tu carrito está vacío.
                </Alert>
            ) : (
                <VStack spacing={4} align="stretch">
                    {cartState.map((item) => (
                        <Flex
                            key={item.id}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            alignItems="center"
                            boxShadow="sm"
                        >
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                boxSize="100px"
                                objectFit="cover"
                                borderRadius="md"
                                mr={4}
                            />
                            <Box flex="1">
                                <Text fontSize="xl" fontWeight="bold">
                                    {item.title}
                                </Text>
                                <HStack spacing={4} mt={2}>
                                    <Text>Precio: ${item.price.toFixed(2)}</Text>
                                    <HStack>
                                        <IconButton
                                            aria-label="Disminuir cantidad"
                                            icon={<MinusIcon />}
                                            size="sm"
                                            onClick={() => removeItem(item.id)}
                                            isDisabled={item.quantity === 1}
                                        />
                                        <Text>{item.quantity}</Text>
                                        <IconButton
                                            aria-label="Aumentar cantidad"
                                            icon={<AddIcon />}
                                            size="sm"
                                            onClick={() => addItem(item)}
                                            isDisabled={item.quantity >= item.stock}
                                        />
                                    </HStack>
                                </HStack>
                            </Box>
                            <Spacer />
                            <HStack>
                                <Text fontWeight="bold">
                                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                </Text>
                                <IconButton
                                    aria-label="Eliminar producto"
                                    icon={<DeleteIcon />}
                                    colorScheme="red"
                                    variant="outline"
                                    onClick={() => handleDeleteItem(item.id)}
                                />
                            </HStack>
                        </Flex>
                    ))}
                    <Divider />
                    <Flex alignItems="center">
                        <Text fontSize="2xl" fontWeight="bold">
                            Total: ${total.toFixed(2)}
                        </Text>
                        <Spacer />
                    </Flex>
                </VStack>
            )}
        </Box>
    );
};