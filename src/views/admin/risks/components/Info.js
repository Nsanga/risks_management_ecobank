import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Select,
    Text,
    IconButton,
} from '@chakra-ui/react';
import data from '../Data';
import { MdUploadFile } from 'react-icons/md';

const Info = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedItem('');
    };

    const handleItemChange = (event) => {
        setSelectedItem(event.target.value);
    };

    const closeModal = () => {
        onClose();
        setSelectedCategory('');
        setSelectedItem('');
    };

    const getCategoryOptions = () => {
        return Object.keys(data).map((category) => ({
            value: category,
            label: category,
        }));
    };

    const getItemOptions = () => {
        if (selectedCategory && data[selectedCategory]) {
            const categories = data[selectedCategory].categories;
            return Object.keys(categories).flatMap((category) =>
                categories[category].map((item) => ({
                    value: item,
                    label: item,
                }))
            );
        }
        return [];
    };

    return (
        <>
            <IconButton onClick={onOpen}>
                <MdUploadFile />
            </IconButton>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Select a category:</Text>
                        <Select value={selectedCategory} onChange={handleCategoryChange} placeholder="Select category" mt={2}>
                            {getCategoryOptions().map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Select>

                        {selectedCategory && (
                            <>
                                <Text mt={4}>Select an item:</Text>
                                <Select value={selectedItem} onChange={handleItemChange} placeholder="Select item" mt={2}>
                                    {getItemOptions().map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Select>
                            </>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Info;