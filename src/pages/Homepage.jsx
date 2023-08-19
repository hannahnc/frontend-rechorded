import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png"


export default function Homepage() {

    return <Box padding={8}>
        <Image padding={20} position={"absolute"} right={5} width={700} src={note} />
        <Heading mt={16} textAlign={"start"} size={"2xl"} color={'blue.200'}>ReChorded: Music Note-Taking App</Heading>
        <Text mt={8} maxW={"54%"} textAlign={"justify"}>
            ReChorded is a web application specifically designed to help music enthusiasts write, save, and edit their notes. 
            It can also transpose chords. To access this web application, you will need to sing-up for an account. This can be accessed in any internet-connected device.

            This is developed using the MERN (MongoDB, Express.js, React.js, and Node.js) Stack and utilized the ChakraUI for the User Interface.
        </Text>
    </Box>
}