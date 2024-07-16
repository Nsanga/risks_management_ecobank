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
    Text,
    useDisclosure,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react'
import DetailsEvent from './DetailsEvent'
import CommentaryEvent from './CommentaryEvent'
import FinancesEvent from './FinancesEvent'
import AdditionalInfoEvent from './AdditionalInfoEvent'

const GlobalViewEvent = ({ detailsData, commentaryData, financesData, additionalData, categories }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button disabled={!detailsData.owner || !detailsData.nominee } onClick={onOpen} colorScheme="blue" mr={2}>Save</Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size='5xl'>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>Create your account</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Tabs>
                            <TabList>
                                <Tab>Details</Tab>
                                <Tab>Commentary</Tab>
                                <Tab >Financials</Tab>
                                <Tab>Additional info</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <DetailsEvent detailsData={detailsData} />
                                </TabPanel>
                                <TabPanel>
                                    <CommentaryEvent commentaryData={commentaryData}/>
                                </TabPanel>
                                <TabPanel>
                                    <FinancesEvent financesData={financesData}/>
                                </TabPanel>
                                <TabPanel>
                                    <AdditionalInfoEvent additionalData={additionalData} categories={categories}/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' mr={3}>
                            Save and Approved
                        </Button>
                        <Button onClick={onClose} colorScheme='red'>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GlobalViewEvent
