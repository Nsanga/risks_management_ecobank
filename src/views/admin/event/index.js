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
    Text,
    Flex,
    Image,
} from '@chakra-ui/react'
import Head from './components/Head'
import { MdInsertDriveFile } from 'react-icons/md'
import { useLocation } from 'react-router-dom';
import LossesEntities from './components/LossesEntities'
import Loader from '../../../assets/img/loader.gif'

const Event = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const location = useLocation();
    const event = location.state?.event;
    const loading = location.state?.loading;
    console.log('evttttt:::', event)

    if (!event) {
        return <Text>Cet évènement n'existe pas.</Text>;
    }

    return (
        <Card mt="100px">
            {
                loading ? (
                    <Flex alignItems='center' justifyContent='center'>
                        <Image src={Loader} alt="Loading..." height={50} width={50} />
                    </Flex>
                ) : (
                    <>
                        <Head
                            eventRef={`EVT${event.num_ref}`}
                            currentState={event.approved === true ? 'Approved' : 'Unapproved'}
                            currentLocks={<Icon as={MdInsertDriveFile} boxSize={6} />}
                            description={event.details.description}
                            totalLosses=' '
                            externalRef={event.details.externalRef}
                        />
                        <LossesEntities event={event} />
                    </>
                )
            }
        </Card>
    )
}

export default Event
