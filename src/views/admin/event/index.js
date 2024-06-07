import Card from 'components/card/Card'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Icon,
} from '@chakra-ui/react'
import Head from './components/Head'
import { MdInsertDriveFile } from 'react-icons/md'

const Event = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Card mt="100px">
            <Head
                eventRef='EVT17010'
                currentState='Approved'
                currentLocks={<Icon as={MdInsertDriveFile} boxSize={6}/>}
                description="Restitution des fonds suite à une fraude par les transactions en ligne sur le compte d'un client du Commercial Bank." 
                totalLosses='1,727.15'
                externalRef 
            />
        </Card>
    )
}

export default Event
