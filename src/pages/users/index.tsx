import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { SideBar } from '../../components/Sidebar'


export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <SideBar />
                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuarios</Heading>
                        <Button as='a' size='sm' fontSize='small' colorScheme='pink' leftIcon={<Icon as={RiAddLine} />}>Criar Novo</Button>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' w='8'>
                                    <Checkbox colorScheme='pink'></Checkbox>
                                </Th>
                                <Th>Usuario</Th>
                                <Th>Data de Cadastro</Th>
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink'></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Leandro Pimentel</Text>
                                        <Text fontSize='small' color='gray.300'>leandropimentel2011@gmail.com</Text>

                                    </Box>
                                </Td>

                                <Td>04 Março 2022</Td>
                                <Td><Button as='a' size='sm' fontSize='small' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} />}>Editar</Button></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )


}