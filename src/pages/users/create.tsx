import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type CreateUserFormData = {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
  }

  const createUserFormSchema = yup.object().shape({
    email: yup.string().required('Email Obrigadtorio').email('Email invalido'),
    name: yup.string().required('Nome obrigatorio'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As Senhas precisam ser iguais'),
    password: yup.string().required('Senha obrigatorio').min(6, 'Minimo de 6 caracteres'),

  }) 

export default function CreateUser() {

    const { register, handleSubmit, formState} = useForm()
    const { errors } = formState
    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) =>{
        await new Promise((resolve => setTimeout(resolve, 2000)))
    }
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px={['6', '8']}>
                <SideBar />
                <Box as='form' onSubmit={handleSubmit(handleCreateUser)}flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Heading size='lg' fontWeight='normal'>Criar Usuario</Heading>
                    <Divider my='6' borderColor='gray.700' />
                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input name='name' label='Nome Completo' error={errors.name} {...register('name')} />
                            <Input name='email' label='E-mail' type='email' error={errors.email} {...register('email')} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input name='password' label='Senha' type='password' error={errors.password} {...register('password')}/>
                            <Input name='password_confirmation' label='Confirmar Senha' type='password' error={errors.password_confirmation} {...register('password_confirmation')} />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button type='submit' colorScheme='pink' isLoading={formState.isSubmitting}>Salvar</Button>

                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );


}