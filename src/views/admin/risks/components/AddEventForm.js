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
import GlobalViewEvent from "./globalViewEvent/GlobalViewEvent";
import { useState } from "react";
import data from "../Data";

function AddEventForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [detailsData, setDetailsData] = useState({});
  const [commentaryData, setCommentaryData] = useState({});
  const [financesData, setFinancesData] = useState([]);
  const [additionalData, setAdditionalData] = useState({});

  const categories = data.map(item => item.title);

  const handleDetailsChange = (data) => {
    setDetailsData(data);
  };

  const handleCommentaryChange = (data) => {
    setCommentaryData(data);
  };

  const handleFinancesChange = (data) => {
    setFinancesData(data);
  };

  const handleAdditionalChange = (data) => {
    setAdditionalData(data);
  };

  return (
    <>
      <Flex justifyContent='flex-end'>
        <Box top="20px">
          <Button leftIcon={<AddIcon />} onClick={onOpen} variant="outline" colorScheme='blue' size='sm'>
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
                <Tab >Financials</Tab>
                <Tab>Additional info <span style={{color:'red'}}>*</span></Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Details onDetailsChange={handleDetailsChange}/>
                </TabPanel>
                <TabPanel>
                  <Commentary onCommentaryChange={handleCommentaryChange} />
                </TabPanel>
                <TabPanel>
                  <Finances onFinancesChange={handleFinancesChange}/>
                </TabPanel>
                <TabPanel>
                  <Additional onAdditionalChange={handleAdditionalChange}/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <GlobalViewEvent detailsData={detailsData} commentaryData={commentaryData} financesData={financesData} additionalData={additionalData} categories={categories} onClose={onClose}/>
            <Button colorScheme="red" mr={2} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddEventForm;