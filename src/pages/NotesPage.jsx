import { Box, Button, Grid, IconButton, Input, StepTitle, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import NoteCard from "../components/Homepage/Notespage/NoteCard/NoteCard";
import { BsPlusLg } from "react-icons/bs"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function NotesPage() {

  const dispatch = useDispatch()
  const { loading, error, data } = useSelector((state) => state.noteReducer)
  console.log(data)
  const [notes, setNotes] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [youtube, setYoutube] = useState("")
  const [major, setMajor] = useState("")
  const [body, setBody] = useState("")

  useEffect(() => {
    dispatch(getNotes())
  }, [])

  useEffect(() => {
    setNotes(data)
  }, [data]);

  const createNote = () => {
    dispatch(createNotes({ title, artist, youtube, major, body }))
    onClose()
  }

  return <Box mt={10} padding={10}>

    <Grid gap={10} w={"100%"} margin={"auto"} gridTemplateColumns="repeat(4, 1fr)">

      {notes?.map((el) => <NoteCard {...el} />)}

    </Grid>

    <>
      <IconButton boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;"}
        bg={"lightpink"}
        m color={'black'}
        w={"80px"}
        h={"80px"}
        borderRadius={50}
        position={"fixed"}
        bottom={0}
        right={0}
        onClick={onOpen}
        margin={16}
        icon={<BsPlusLg />}></IconButton>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"lightblue"} m color={'black'}>Create new note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>

            <Input value={title} m placeholder="Title (Required)" onChange={(e) => setTitle(e.target.value)}></Input>
            <Input value={artist} m placeholder="Artist" onChange={(e) => setArtist(e.target.value)}></Input>
            <Input value={youtube} m placeholder="YouTube Link" onChange={(e) => setYoutube(e.target.value)}></Input>
            <Input value={major} m placeholder="Key" onChange={(e) => setMajor(e.target.value)}></Input>
            <Textarea mt={4} value={body} placeholder={'Song - Chords and/or Lyrics (Required)'} onChange={(e) => setBody(e.target.value)}></Textarea>

          </ModalBody>

          <ModalFooter>
            <Button
              bg={"lightpink"}
              mr={3}
              m color={'black'}
              onClick={createNote}>
              Save
            </Button>
            <Button m color={'black'} bg={"blue.200"} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  </Box>
}