import React, { useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  FormControl, InputGroup, InputLeftElement, Input, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button,
  Box, Collapse, Flex, ModalFooter
} from '@chakra-ui/react';
import { SearchIcon, AddIcon } from '@chakra-ui/icons';
import ProfileDetails from './ProfileDetails';
import OperationalModelOptions from './OperationalModelOptions';

const AddProfileModal = ({ isOpen, onClose }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    jobTitle: '',
    location: '',
    telephone: '',
    email: '',
    userGroup: '',
    language: '',
    ccEmailTo: '',
    nominee: ''
  });
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userId) newErrors.userId = 'User ID is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    // Add more validation as needed
    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission
      onClose();
    } else {
      setErrors(newErrors);
    }
  };

  // Example data for demonstration
  const users = [
    { id: '001', name: 'John Doe', location: 'New York', status: 'Active', active: 'Yes' },
    { id: '002', name: 'Jane Smith', location: 'London', status: 'Inactive', active: 'No' },
    // Add more users as needed
  ];

  // Filter users based on the search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            {/* Left Box - Table with shadow, border, and search bar */}
            <Box flex="1" mr="4" p={4} shadow="md" borderWidth="1px" borderRadius="md">
              {/* Search Bar with Icon */}
              <FormControl mb="4">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="blue.500" />}
                  />
                  <Input
                    placeholder="Search by name or location..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </InputGroup>
              </FormControl>

              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th borderRight="1px solid black">User ID</Th>
                      <Th borderRight="1px solid black">Name</Th>
                      <Th borderRight="1px solid black">Location</Th>
                      <Th borderRight="1px solid black">Status</Th>
                      <Th>Active</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {filteredUsers.map(user => (
                      <Tr key={user.id}>
                        <Td borderRight="1px solid black">{user.id}</Td>
                        <Td borderRight="1px solid black">{user.name}</Td>
                        <Td borderRight="1px solid black">{user.location}</Td>
                        <Td borderRight="1px solid black">
                          <Box
                            w="12px"
                            h="12px"
                            borderRadius="full"
                            bg={user.status === 'Active' ? 'green.500' : 'red.500'}
                          />
                        </Td>
                        <Td>
                          <Box
                            w="12px"
                            h="12px"
                            borderRadius="full"
                            bg={user.active === 'Yes' ? 'green.500' : 'red.500'}
                          />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            {/* Right Box - Enhanced Form */}
            <Box flex="1" p={6} shadow="lg" borderWidth="1px" borderRadius="md">
              <Flex mb={4} gap={4}>
                <Button
                  onClick={() => setIsDetailsVisible(true)}
                  colorScheme={isDetailsVisible ? 'blue' : 'gray'}
                  variant={isDetailsVisible ? 'solid' : 'outline'}
                  leftIcon={<AddIcon />}
                  fontSize="sm"
                  size="sm"
                >
                  User Details
                </Button>
                <Button
                  onClick={() => setIsDetailsVisible(false)}
                  colorScheme={!isDetailsVisible ? 'blue' : 'gray'}
                  variant={!isDetailsVisible ? 'solid' : 'outline'}
                  leftIcon={<AddIcon />}
                  fontSize="sm"
                  size="sm"
                >
                  User Entity Views
                </Button>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  leftIcon={<AddIcon />}
                  fontSize="sm"
                  size="sm"
                >
                  User Entities
                </Button>
              </Flex>
              <Collapse in={isDetailsVisible}>
                <ProfileDetails formData={formData} handleInputChange={handleInputChange} errors={errors} />
              </Collapse>
              <Collapse in={!isDetailsVisible}>
                <OperationalModelOptions />
              </Collapse>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button colorScheme="red" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddProfileModal;
