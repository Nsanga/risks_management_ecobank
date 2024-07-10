import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import Info from './Info';
import data from '../Data'; // Assurez-vous d'importer vos données

const Additional = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({ category: '', select: '', description: '' });

  const handleCellClick = (category, select, description) => {
    setSelectedData({ category, select, description });
    setIsOpen(true);
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
          {Object.keys(data).map((category) => (
            <Tr key={category}>
              <Td>{data[category].title}</Td>
              <Td><Info category={category} onCellClick={handleCellClick} /></Td>
              <Td>Description for {data[category].name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedData.category}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p><strong>Select:</strong> {selectedData.select}</p>
            <p><strong>Description:</strong> {selectedData.description}</p>
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
