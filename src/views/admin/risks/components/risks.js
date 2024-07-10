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





function Risk() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Flex justifyContent='flex-end'>
      <Box  top="20px">
        <Button leftIcon={<AddIcon/>} onClick={onOpen} variant="outline" colorScheme='blue' size='md'>
    Add new event
  </Button>
      </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Details</Tab>
                <Tab>Commentary</Tab>
                <Tab>financials</Tab>
                <Tab>Additional info</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Details />
                </TabPanel>
                <TabPanel>
                  <Commentary />
                </TabPanel>
                <TabPanel>
                  <Finances />
                </TabPanel>
                <TabPanel>
                <Additional />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Risk;
