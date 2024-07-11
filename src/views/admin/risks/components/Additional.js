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
  List,
  ListItem,
  Collapse,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { MdUploadFile } from 'react-icons/md';
import data from '../Data';
import MultiLevelList from './NestedListItem ';

const Additional = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDescriptions, setSelectedDescriptions] = useState({});

  const handleCellClick = (index, category) => {
    setSelectedCategory({ index, category });
    setIsOpen(true);
  };

  const handleItemClick = (item) => {
    setSelectedDescriptions(prevState => ({
      ...prevState,
      [selectedCategory.index]: item,
    }));
    setIsOpen(false);
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
              <Td onClick={() => handleCellClick(index, item.title)}>
                <Button variant="link" color="blue"><MdUploadFile /></Button>
              </Td>
              <Td>{selectedDescriptions[index]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedCategory?.category}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedCategory && (
              <MultiLevelList
                data={data.find(item => item.title === selectedCategory.category)}
                onItemClick={handleItemClick}
              />
            )}
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
