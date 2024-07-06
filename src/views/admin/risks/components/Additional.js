import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import Info from './Info';
const Additional = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({ category: '', select: '', description: '' });

  const handleCellClick = ( select) => {
    setSelectedData({ select });
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
          <Tr >
            <Td>Regulation Line of Business</Td>
            <Td><Info/></Td>
            <Td>Description for Option 1</Td>
          </Tr>
          <Tr >
            <Td>Product Type</Td>
            <Td><Info/></Td>
            <Td>Description for Option A</Td>
          </Tr>
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
