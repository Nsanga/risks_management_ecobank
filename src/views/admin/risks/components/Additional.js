import React, { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import data from '../Data';
import MultiLevelList from './NestedListItem ';
import { MdUploadFile } from 'react-icons/md';

const Additional = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const handleCellClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(true);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>Select</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.title}</Td>
              <Td onClick={() => handleCellClick(item.title)}>
                <Button variant="link" color="blue"><MdUploadFile /></Button>
              </Td>
              <Td>{selectedCategory === item.title && selectedItem}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedCategory}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MultiLevelList
              data={data.find(item => item.title === selectedCategory)}
              onItemClick={handleItemClick} // Passez la fonction de rappel handleItemClick à MultiLevelList
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Additional;
