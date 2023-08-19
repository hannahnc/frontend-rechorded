import { Button, Card, CardBody, Flex, Heading, Input, Link, Text, Textarea, VStack, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../../Redux/notes/note.actions";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbCircleArrowUp, TbCircleArrowDown } from "react-icons/tb";


export default function NoteCard({ title, artist, youtube, spotify, major, body, user, _id }) {

    const dispatch = useDispatch()
    const [notes, setNotes] = useState([])
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()
    const { isOpen: isDownloadOpen, onOpen: onDownloadOpen, onClose: onDownloadClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const cancelRef = React.useRef()

    const [tempTitle, setTitle] = useState(title)
    const [tempArtist, setArtist] = useState(artist)
    const [tempYoutube, setYoutube] = useState(youtube)
    const [tempMajor, setMajor] = useState(major)
    const [tempBody, setBody] = useState(body)

    const updateNote = () => {
        dispatch(updateNotes(_id, { title: tempTitle, artist: tempArtist, youtube: tempYoutube, key: tempMajor, body: tempBody }))
        onEditClose()
    }
    const deleteNote = () => {
        dispatch(deleteNotes(_id, { title: tempTitle, artist: tempArtist, youtube: tempYoutube, key: tempMajor, body: tempBody }))
        onDeleteClose()
    }

    const nav = useNavigate()


    return <Card bg={"lightblue"}>
        <CardBody>
            <VStack>

                <Heading m color={'black'} fontSize={30}>{title}</Heading>
                <Heading m color={'black'} fontSize={20}>{artist}</Heading>
                <Text m color={'black'} fontSize={14} textDecoration={"underline"}>{youtube}</Text>
                <Text m color={'black'} fontSize={18}>Key of {tempMajor}</Text>
                <Text m color={'black'}>{body}</Text>

                <Flex gap={2}>
                    <>
                        <Button m color={'black'} bg={"lightpink"} onClick={onEditOpen}>Edit Note</Button>

                        <Modal
                            blockScrollOnMount={false}
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isEditOpen}
                            onClose={onEditClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader m color={'black'} bg={"lightpink"}>Edit Note</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={5}>

                                    <Input value={tempTitle} m placeholder="Title" onChange={(e) => setTitle(e.target.value)}></Input>
                                    <Input value={tempArtist} m placeholder="Artist" onChange={(e) => setArtist(e.target.value)}></Input>
                                    <Input value={tempYoutube} m placeholder="YouTube Link" onChange={(e) => setYoutube(e.target.value)}></Input>
                                    <Input value={tempMajor} m placeholder="Key" onChange={(e) => setMajor(e.target.value)}></Input>
                                    <Textarea mt={5} id='input' value={tempBody} placeholder={'Lyrics and/or Chords'} onChange={(e) => setBody(e.target.value)}></Textarea>
            
                                </ModalBody>

                                <ModalFooter>

                                    <Button mr={40} m color={'black'} bg={"lightpink"} onClick={onDownloadOpen}>Download</Button>
                                    <Button
                                        bg={"lightpink"}
                                        m color={'black'}
                                        mr={4}
                                        onClick={updateNote}>
                                        Save
                                    </Button>
                                    <Button m color={'black'} bg={"blue.200"} onClick={onEditClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                    <>
                        <Button m color={'black'} bg={"blue.200"} onClick={onDeleteOpen}>Delete Note</Button>

                        <Modal blockScrollOnMount={true} isOpen={isDeleteOpen} onClose={onDeleteClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader bg={"lightblue"}>Delete Note</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text fontWeight='bold' mb='1rem'>
                                        Are you sure you want to delete this note? You can't undo this action afterwards.
                                    </Text>

                                </ModalBody>

                                <ModalFooter>
                                    <Button m color={'black'} bg={"blue.200"} mr={3} variant='ghost' onClick={onDeleteClose}>Cancel</Button>
                                    <Button m color={'black'} bg={"lightpink"} onClick={deleteNote}>
                                        Delete Note
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>

                </Flex>

            </VStack>
        </CardBody>
    </Card>
}