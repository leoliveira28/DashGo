import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/Sidebar'


export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px={['6', '8']}>
                <SideBar />
                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Heading size='lg' fontWeight='normal'>Criar Usuario</Heading>
                    <Divider my='6' borderColor='gray.700' />
                    <VStack spacing='8'>
                    <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                        <Input name='name' label='Nome Completo' />
                        <Input name='email' label='E-mail' type='email' />
                  </SimpleGrid>
                  <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                        <Input name='password' label='Senha' type='password' />
                        <Input name='password_confirmation' label='Confirmar Senha' type='password' />
                  </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                            <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button colorScheme='pink'>Salvar</Button>

                            </HStack>
                        </Flex>
                </Box>
            </Flex>
        </Box>
    );


}