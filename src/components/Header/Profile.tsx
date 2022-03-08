import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: Boolean;
}

export function Profile({ showProfileData=true }: ProfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                <Text>Leandro Pimentel</Text>
                <Text color='gray.300'
                    fontSize='small'>leandropimentel2011@gmail.com</Text>

            </Box>
            )}
            <Avatar size='md' name='Leandro Pimentel' src='https://github.com/leoliveira28.png'>
            </Avatar>
            </Flex>
            );
}