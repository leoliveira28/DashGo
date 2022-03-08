import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContex";
import { SiderbarNav } from "./SiderbarNav";


export function SideBar() {
    const {isOpen, onClose} = useSidebarDrawer()
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    }) 
    
    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
         <DrawerOverlay>
             <DrawerContent bg='gray.800' p='4'>
                 <DrawerCloseButton mt='6' />
                 <DrawerHeader>Navegação</DrawerHeader>
                 <DrawerBody>
                     <SiderbarNav />
                 </DrawerBody>
             </DrawerContent>
             </DrawerOverlay>   
            </Drawer>
        );
        
    }
    return (
        <Box as='aside' w='64' mr='8'>
            <SiderbarNav />
        </Box>
    )
}