import React, { useState } from 'react';
import {
  Flex, Box, Select, Button, Table, Thead, Tbody, Tr, Th, Td, Input
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import AddEntityModal from './AddEntityModal';

const Entitynew = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p={4}>
      <Flex direction="row" align="center" mb={4}>
        <Button colorScheme="blue" variant="outline" mr={2}>New Entity</Button>
      </Flex>
      
      <Flex justifyContent="flex-end" mb={6}>
        <Button leftIcon={<AddIcon />} colorScheme="blue" variant="outline" mr={2} onClick={openModal}>Add</Button>
        <Button leftIcon={<EditIcon />} colorScheme="teal" variant="outline" mr={2}>Amend</Button>
        <Button leftIcon={<DeleteIcon />} colorScheme="red" variant="outline" mr={2}>Delete</Button>
        <Button colorScheme="orange" variant="outline">Restructure</Button>
      </Flex>

      <Flex direction="column" borderWidth="2px" borderRadius="lg" p={6} mb={8}>
        <Box mb={4}>
          <Select placeholder="Select Entity">
            {/* Options go here */}
          </Select>
        </Box>

        <Flex direction="column">
          <Flex mb={4}>
            <Select placeholder="Filter on">
              {/* Options go here */}
            </Select>
            <Input placeholder="Status" ml={4} />
          </Flex>

          <Flex mb={4}>
            <Input placeholder="RAM" mr={4} />
            <Input placeholder="Owner" />
          </Flex>

          <Flex justifyContent="space-between" mb={4}>
            <Box>Number of Risks: 0</Box>
            <Box>Total Annual Residual Exposure: 0.00</Box>
          </Flex>
        </Flex>
      </Flex>

      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Reference Id</Th>
            <Th>Description</Th>
            <Th>Owner</Th>
            <Th>Nominee</Th>
            <Th>Reviewer</Th>
            <Th>Category</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Table rows go here */}
        </Tbody>
      </Table>

      <AddEntityModal isOpen={isModalOpen} onClose={closeModal} />
    </Box>
  );
}

export default Entitynew;
