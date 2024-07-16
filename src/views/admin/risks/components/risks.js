import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Flex,
  Button
} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import Details from "./Details";
import Commentary from "./Commentary";
import Finances from "./Finances";
import { AddIcon } from "@chakra-ui/icons";
import Additional from "./Additional";
import Review from "./Review";

function Risk() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isReviewOpen, onOpen: onReviewOpen, onClose: onReviewClose } = useDisclosure();

  const [details, setDetails] = useState({});
  const [commentary, setCommentary] = useState('');
  const [financials, setFinancials] = useState('');
  const [additional, setAdditional] = useState('');

  const handleSave = () => {
    // Assume form data is saved into state here
    // For example:
    setDetails({ eventDate: 'date', rag: 'Red', activeEvent: true, externalEvent: false, externalRef: '12345', notify: true, detectionEntity: 'Entity A', detectionSubEntity: 'Sub Entity A', detectionDate: 'date', originEntity: 'Entity B', originSubEntity: 'Sub Entity B', description: 'Description text', detailedDescription: 'Detailed description text', approvedDate: 'date', closedDate: 'date', targetClosureDate: 'date', owner: 'Owner Name', nominee: 'Nominee Name', reviewer: 'Reviewer Name', reviewDate: 'date' });
    setCommentary('Commentary text');
    setFinancials('Financials text');
    setAdditional('Additional info text');
    onReviewOpen();
  };

  return (
    <>
      <Flex justifyContent='flex-end'>
        <Box top="20px">
          <Button leftIcon={<AddIcon />} onClick={onOpen} variant="outline" colorScheme='blue' size='md'>
            Add new event
          </Button>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Details</Tab>
                <Tab>Commentary</Tab>
                <Tab>Financials</Tab>
                <Tab>Additional info</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Details onDetailsChange={setDetails} />
                </TabPanel>
                <TabPanel>
                  <Commentary onCommentaryChange={setCommentary} />
                </TabPanel>
                <TabPanel>
                  <Finances onFinancialsChange={setFinancials} />
                </TabPanel>
                <TabPanel>
                  <Additional onAdditionalChange={setAdditional} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={2} onClick={handleSave}>Save</Button>
            <Button colorScheme="green" mr={2}>Save And Approve</Button>
            <Button colorScheme="red" mr={2} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isReviewOpen} onClose={onReviewClose} scrollBehavior="inside" size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review Event Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Review details={details} commentary={commentary} financials={financials} additional={additional} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={2}>Approve</Button>
            <Button colorScheme="red" mr={2} onClick={onReviewClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Risk;
