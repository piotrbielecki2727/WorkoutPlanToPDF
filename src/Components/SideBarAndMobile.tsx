import { ReactNode } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Image,
} from '@chakra-ui/react';
import {
    FiMenu,
} from 'react-icons/fi';
import logo from '../Assets/logoNew.png';

import { DisplaySideBarContent } from './SideBarContent/DisplaySideBarContent';
import { DisplayCurrentWorkout } from './CurrentWorkout/DisplayWorkout/DisplayCurrentWorkout';


export default function MainPage({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh">
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                bg='black'
                borderRight='1px solid #363636'
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">

                <DrawerContent
                >
                    <SidebarContent onClose={onClose} />


                </DrawerContent>
            </Drawer>
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />

            <Box bg='rgba(11, 255, 0, 0.42)' h='100vh' ml={{ base: '0px', md: '275px', lg: '275px', xl: '275px' }}>
                <DisplayCurrentWorkout />
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg='white'
            w={{ base: 'full', md: '275px', xl: '275px' }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex

                h="20"
                alignItems="center"
                justifyContent="space-between"
                borderBottom='1px solid #363636'
                bg='black'>
                <Box w='20%' color='white'>

                </Box>
                <Box w={{ base: '400px' }} color='white'>
                    <Image src={logo} />

                </Box>
                <Box w='20%' color='white' justifyContent='center' display='flex'  >
                    <CloseButton display={{ base: 'flex', md: 'none' }} ml={3} color='white' onClick={onClose} />

                </Box>

            </Flex>


            <DisplaySideBarContent />


        </Box>
    );
};


interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 2, md: 24 }}
            height="20"
            alignItems="center"
            bg='black'
            justifyContent='space-between'
            gap={5}
            {...rest}>
            <Box w='20%' color='white' >
                <IconButton
                    variant="none"
                    onClick={onOpen}
                    aria-label="open menu"
                    color='white'
                    icon={<FiMenu />}
                    fontSize={30}

                />
            </Box>
            <Box w={{ base: '330px', sm: '350px' }} color='white'>
                <Image src={logo} />

            </Box>
            <Box w='20%' color='white'>

            </Box>


        </Flex>
    );
};