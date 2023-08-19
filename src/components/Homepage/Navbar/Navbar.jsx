import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useDragControls } from 'framer-motion';
import { LOGOUT } from '../../../Redux/users/user.types';
import LoginPage from '../../../pages/LoginPage';
import SignupPage from '../../../pages/SignupPage';
import TransposePage from '../../../pages/TransposePage';


const NavLink = ({ children }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const { auth, token, loading, error } = useSelector((state) => state.userReducer)
  console.log(auth)

  const nav = useNavigate()
  return (
    <>
      <Box zIndex={1000} position={"fixed"} top={0} w={"100%"} boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;"} bg={"lightblue"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} color={"black"} cursor={"pointer"} textDecoration={'underline'} onClick={() => {
            nav("/")
          }}>ReChorded</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>
              <Button display={auth == true ? "block" : "none"} bg={'pink'} m color={'black'} onClick={() => {
                nav("/transpose")
              }}>Transpose</Button>
              <Button display={auth == true ? "block" : "none"} bg={'pink'} m color={'black'} onClick={() => {
                nav("/notes")
              }}>All Notes</Button>
              <Button display={auth == true ? "none" : "block"} bg={'pink'} m color={'black'} onClick={() => {
                nav("/register")
              }}>Signup</Button>
              <Button display={auth == true ? "none" : "block"} bg={'pink'} m color={'black'} onClick={() => {
                nav("/login")
              }}>Login</Button>
              <Button bg={'pink'} m color={'black'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  border="2px solid pink"
                  padding={1}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    bg={'lightpink'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      bg={'lightpink'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Button bg={'lightblue'} m color={'black'} cursor={'pointer'} textDecorationLine={'underline'} fontWeight={'bold'} onClick={() => {
                      nav("/")
                    }}>ReChorded</Button>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem fontWeight={'bold'} bg={'lightblue'} m color={'black'} onClick={() => {
                    dispatch({ type: LOGOUT })
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}