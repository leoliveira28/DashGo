import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SideBar() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <Box>
                    <Text fontWeight='bold'
                    color='gray.400'
                    fontSize='small'>Geral</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                        <Link display='flex' color=''>
                        <Icon as={RiDashboardLine} fontSize='20' ></Icon>
                        <Text ml='4' fontWeight='mediun'>Dashboard</Text>
                        </Link>
                        <Link display='flex' color=''>
                        <Icon as={RiContactsLine} fontSize='20' ></Icon>
                        <Text ml='4' fontWeight='mediun'>Usuarios</Text>
                        </Link>
                        </Stack>
                </Box>
                <Box>
                    <Text fontWeight='bold'
                    color='gray.400'
                    fontSize='small'>Automação</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                        <Link display='flex' color=''>
                        <Icon as={RiInputMethodLine} fontSize='20' ></Icon>
                        <Text ml='4' fontWeight='mediun'>Formularios</Text>
                        </Link>
                        <Link display='flex' color=''>
                        <Icon as={RiGitMergeLine} fontSize='20' ></Icon>
                        <Text ml='4' fontWeight='mediun'>Automação</Text>
                        </Link>
                        </Stack>
                </Box>
            </Stack>
            </Box>
    )
}