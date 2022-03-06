import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Leandro Pimentel</Text>
                <Text color='gray.300'
                    fontSize='small'>leandropimentel2011@gmail.com</Text>

            </Box>
            <Avatar size='md' name='Leandro Pimentel' src='https://github.com/leoliveira28.png'>
            </Avatar>
            </Flex>
            );
}