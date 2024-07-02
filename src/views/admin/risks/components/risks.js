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
  Text,
  Input,
  Button
} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import Details from "./Details";
import Commentary from "./Commentary";
import Finances from "./Finances";





function Risk() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="absolute" top="20px" right="20px" zIndex="1">
        <Button onClick={onOpen}>Add event</Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
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
                  <Flex direction="column" gap={4}>
                    <Flex alignItems="center" gap={2}>
                      <Text>Entity:</Text>
                      <Input type="text" />
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                      <Text>Sub-Entity:</Text>
                      <Input type="text" />
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                      <Text>Date of Detection:</Text>
                      <Input type="date" />
                    </Flex>
                  </Flex>
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
