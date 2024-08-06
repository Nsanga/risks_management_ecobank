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
import { MdClose, MdInsertDriveFile } from 'react-icons/md'
import { useLocation } from 'react-router-dom';
import LossesEntities from './components/LossesEntities'
import Loader from '../../../assets/img/loader.gif'
import DetailsForm from './components/DetailsForm'
import Commentary from './components/commentary'
import Finances from './components/Financials'
import { FaPrint } from 'react-icons/fa'
import { DeleteIcon } from '@chakra-ui/icons'
import AddEventForm from '../risks/components/AddEventForm'

const Event = () => {

    const location = useLocation();
    const event = location.state?.event;
    const loading = location.state?.loading;
    console.log('evttttt:::', event.details)

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
                    <Flex direction='column' gap={6}>
                        <Head
                            eventRef={`EVT${event.num_ref}`}
                            currentState={event.approved === true ? 'Approved' : 'Unapproved'}
                            currentLocks={<Icon as={MdInsertDriveFile} boxSize={6} />}
                            description={event.details.description}
                            totalLosses=' '
                            externalRef={event.details.externalRef}
                        />
                        <DetailsForm detailledDescription={event.details.descriptionDetailled} />
                        <LossesEntities
                            entityofDetection={event.details.entityOfDetection}
                            subEntityofDetection={event.details.subentityOfDetection}
                            entityofDOrigin={event.details.entityOfOrigin}
                            subEntityofOrigin={event.details.subentityOfOrigin}
                        />
                        <Commentary
                            eventDate={event.details.event_date}
                            rag={event.details.RAG}
                            activeEvent={event.details.activeEvent}
                            eventTime={event.details.event_time}
                            recordedBy={event.details.recorded_by}
                            dateRecording={event.createdAt}
                            timeRecording={event.createdAt}
                            excludeFundLosse={event.details.excludeFundLosses}
                            externalEvent={event.details.externalEvent}
                            notify={event.details.notify}
                            detectionDate={event.details.detection_date}
                        />
                        <Finances
                            approved={event.details.approved_date}
                            closed={event.details.closed_date}
                            targetClosure={event.details.targetClosureDate}
                            owner={event.details.owner}
                            nominee={event.details.nominee}
                            reviewer={event.details.reviewer}
                            reviewerDate={event.details.reviewer_date}
                        />
                        <Flex justifyContent='flex-end' gap={4}>
                            <Flex>
                                <Button leftIcon={<FaPrint />} variant='outline' colorScheme='teal'>Print</Button>
                            </Flex>
                            <Flex>
                            <Button leftIcon={<MdClose />} variant='outline' colorScheme='green'>Unapproved</Button>
                        </Flex>
                        <Flex>
                            <Button leftIcon={<DeleteIcon />} variant='outline' colorScheme='red'>Delete</Button>
                        </Flex>
                        <Flex>
                            <AddEventForm event={event}/>
                        </Flex>
                        </Flex>
                    </Flex>
                )
            }
        </Card>
    )
}

export default Event
