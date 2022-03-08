import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SiderbarNav(){
    return(
        <Stack spacing='12' align='flex-start'>
                <NavSection title='Geral'>
                    <NavLink href='/dashboard' icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink href='/users' icon={RiContactsLine}>Usuarios</NavLink>
                </NavSection>
                <NavSection title='Automação'>
                    <NavLink href='/forms' icon={RiInputMethodLine}>Formularios</NavLink>
                    <NavLink href='/automation'icon={RiGitMergeLine}>Automação</NavLink>
                </NavSection>
            </Stack>
    );
}