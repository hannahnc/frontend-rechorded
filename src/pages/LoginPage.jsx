import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import signup from "../assets/signup.jpg";
import {
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
import { getUser } from "../Redux/users/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
  const nav = useNavigate()
  const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
  console.log(auth,token)
  if(auth){
    nav("/notes")
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleLogin =()=>{
    dispatch(getUser({email,password}))

  }
  
    return <Flex padding={"20"} width={"100%"}>
        
        <Image w={"50%"} src={signup} minH={'100vh'} align={'center'} justify={'center'}></Image>
        <VStack w={"50%"}>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} color={'blue.200'}>ReChorded</Heading>
          <Heading fontSize={'5xl'}>Log in to your account</Heading>
          <Text fontSize={'lg'} color={'grey.500'}>
            to enjoy all of the cool <Link color={'blue.400'}>features</Link> 🎵📝
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.500')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </VStack>

    </Flex>
}