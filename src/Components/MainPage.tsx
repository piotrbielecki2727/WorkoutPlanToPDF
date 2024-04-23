import React, { ReactNode, ReactText } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Image,
    Spacer,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

import logo from '../Assets/logoNew.png'
import { WorkoutPlanPage } from '../Pages/WorkoutPlanPage';


export default function MainPage({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh">
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                bg='black'
                borderRight='1px solid black'
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
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}

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
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex

                h="20"
                alignItems="center"
                justifyContent="space-between"
                bg='black'>
                <Box w='20%' color='white'>

                </Box>
                <Box w={{ base: '230px', sm: '300px', xl: '600px' }} color='white'>
                    <Image src={logo} />

                </Box>
                <Box w='20%' color='white' justifyContent='center' display='flex'  >
                    <CloseButton display={{ base: 'flex', md: 'none' }} ml={3} color='white' onClick={onClose} />

                </Box>
            </Flex>
            <WorkoutPlanPage />
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