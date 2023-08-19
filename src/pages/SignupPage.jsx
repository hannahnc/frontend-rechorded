import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import login from "../assets/login.jpg";
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
import axios from "axios";
import { BASE_URL } from "../constants/config";

export default function SignupPage(){
  const nav = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name,setName] = useState("")

  const handleSignup =async()=>{
    let data = await axios.post(BASE_URL+"/user/register",{
        name,email,password
    })
    let {message,status} = data.data
    if(status===1){
        alert(message)
        nav("/login")
    }else{
        alert(message)
    }

  }
  
    return <Flex padding={"20"} width={"100%"}>
        
        <Image w={"50%"} src={login} minH={'100vh'} align={'center'} justify={'center'}></Image>
        <VStack w={"50%"}>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} color={'blue.200'}>ReChorded</Heading>
          <Heading fontSize={'5xl'}>Create your account</Heading>
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
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
            </FormControl>
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
              </Stack>
              <Button
              onClick={handleSignup}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </VStack>

    </Flex>
}