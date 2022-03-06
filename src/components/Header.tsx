import { Flex, Input, Text, Icon, Stack, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export function Header() {
    return (
        <Flex as='header'
        w='100%'
        maxWidth={1480}
        h='20'
        marginX='auto'
        mt='4'
        px='6'
        align='center'
        >
        <Text
        fontSize='3xl'
        fontWeight='bold'
        letterSpacing='tight'
        w='64'
        >
            dashgo
            <Text color='pink.500' as='span'>.</Text>
        </Text>
        <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxWidth='400'
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
        >
            <Input color='gray.50'
            variant='unstyled'
            px='4'
            mr='4'
            placeholder='Buscar na plataforma'
            _placeholder={{color: 'gray.400'}}

            />
        <Icon fontSize='20' as={RiSearchLine}/>
        </Flex>
        <Flex align='center'
        ml='auto
        '>
            <HStack spacing='4'
            mx='8'
            pr='8'
            py='1'
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.300'>
            <Icon as={RiNotificationLine} fontSize='20' />
            <Icon as={RiUserAddLine} fontSize='20' />
            </HStack>
            <Flex align='center'>
                <Box mr='4' textAlign='right'>
                    <Text>Leandro Pimentel</Text>
                    <Text color='gray.300'
                     fontSize='small'>leandropimentel2011@gmail.com</Text>

                </Box>
                <Avatar size='md' name='Leandro Pimentel' src='https://github.com/leoliveira28.png'>
                    </Avatar>
            </Flex>
        </Flex>
        </Flex>

    );
}