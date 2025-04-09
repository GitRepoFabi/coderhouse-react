import { Flex } from "@chakra-ui/react";

export const IndexListContainer = ({ greeting }) => {
    return (
        <Flex 
            alignItems={'center'} 
            width={'100%'} 
            height={'90vh'}
            justifyContent={"center"}
            fontSize={30}
            fontWeight={'bold'}>
            {greeting}
        </Flex>
    )
};