import React from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, Input, Select, Checkbox, Button, Box, Flex
} from '@chakra-ui/react';

const AddEntityModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Entity</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Box flex="1" mr="4">
              <FormControl mb="4">
                <FormLabel>Description</FormLabel>
                <Input />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>RAM</FormLabel>
                <Select>
                  {/* Options go here */}
                </Select>
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Created On</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Entity Active</FormLabel>
                <Checkbox />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Owner</FormLabel>
                <Input />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Nominee</FormLabel>
                <Input />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Reviewer</FormLabel>
                <Input />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Review Date</FormLabel>
                <Input type="date" />
              </FormControl>
            </Box>
            <Box p={3} shadow='md' borderWidth='1px' width='49%'height={250}>
              <FormControl mb="4">
                <FormLabel>Location</FormLabel>
                <Select>
                  {/* Options go here */}
                </Select>
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Business Line</FormLabel>
                <Select>
                  {/* Options go here */}
                </Select>
              </FormControl>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3}>Documents</Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>Save</Button>
          <Button colorScheme="red" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddEntityModal;
