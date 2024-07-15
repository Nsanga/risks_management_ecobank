import { Flex, Input, Text, Select, Textarea, Box, Checkbox, GridItem, Button } from '@chakra-ui/react';
import { FaFilePdf, FaFileWord, FaFileAlt, FaFileImage } from 'react-icons/fa';
import React, { useState } from 'react';
import DocumentUploader from './DocumentUploader';

const Details = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const renderIcon = (file) => {
        const fileType = file.type;
        if (fileType.startsWith('image/')) {
            return <FaFileImage size={50} color="blue" />;
        } else if (fileType === 'application/pdf') {
            return <FaFilePdf size={50} color="red" />;
        } else if (fileType.includes('word')) {
            return <FaFileWord size={50} color="blue" />;
        } else {
            return <FaFileAlt size={50} color="gray" />;
        }
    };

    const renderPreview = (file) => {
        const fileType = file.type;
        if (fileType.startsWith('image/')) {
            return (
                <Box textAlign="center" mt={2}>
                    {renderIcon(file)}
                    <Text mt={2}>{file.name}</Text>
                    <Box mt={2}>
                        <img src={URL.createObjectURL(file)} alt={file.name} style={{ maxWidth: '50%', height: 'auto' }} />
                    </Box>
                </Box>
            );
        } else if (fileType === 'application/pdf') {
            return (
                <Box textAlign="center" mt={2}>
                    {renderIcon(file)}
                    <Text mt={2}>{file.name}</Text>
                    <Box mt={2}>
                        <iframe src={URL.createObjectURL(file)} title={file.name} width="50%" height="50px" style={{ border: 'none' }}></iframe>
                    </Box>
                </Box>
            );
        } else {
            return (
                <Box textAlign="center" mt={2}>
                    {renderIcon(file)}
                    <Text mt={2}>{file.name}</Text>
                </Box>
            );
        }
    };

    return (
        <Box>
            <Flex flexDirection='column' gap={4}>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={6} alignItems="center">
                        <Text>Event Date:</Text>
                        <Box width={200}>
                            <Input placeholder='Select Date' size='md' type='date' />
                        </Box>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text>RAG:</Text>
                        <Box width={200}>
                            <Select placeholder="Select RAG" size='md'>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </Select>
                        </Box>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox defaultChecked>Active Event</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={5} alignItems="center">
                        <Text>Event Time:</Text>
                        <Box width={200}>
                            <Input placeholder='Select Date and Time' size='md' type='time' />
                        </Box>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Checkbox defaultChecked>External Event</Checkbox>
                    <Flex gap={5} alignItems="center">
                        <Text>External Ref:</Text>
                        <Box>
                            <Input placeholder='Select Date and Time' size='md' type='text' />
                        </Box>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox defaultChecked>Notify</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Box p={5} shadow='md' borderWidth='1px' width='49%'>
                        <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                            Area of Detection
                        </Box>
                        <Flex flexDirection='column' gap={4}>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text>Entity:</Text>
                                <Box width={200}>
                                    <Select placeholder="Select Entity" size='md'>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                    </Select>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text>Sub Entity:</Text>
                                <Box width={200}>
                                    <Input placeholder='' size='md' type='text' />
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text>Detection Date:</Text>
                                <Box width={200}>
                                    <Input placeholder='Select Date' size='md' type='date' />
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box p={5} shadow='md' borderWidth='1px' width='49%'>
                        <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                            Area of Origin
                        </Box>
                        <Flex flexDirection='column' gap={4}>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text>Entity:</Text>
                                <Box width={200}>
                                    <Select placeholder="Select Entity" size='md'>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                    </Select>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text>Sub Entity:</Text>
                                <Box width={200}>
                                    <Input placeholder='' size='md' type='text' />
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Box pt={5} pb={5}>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Description
                    </Box>
                    <Input placeholder='Event description' />
                </Box>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Detailed Description
                    </Box>
                    <Textarea placeholder='Description détaillée' />
                </Box>
                <Flex justifyContent='space-between' pt={5}>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={14} alignItems="center">
                            <Text>Approved Date:</Text>
                            <Box width={200}>
                                <Input placeholder='Select Date' size='md' type='date' />
                            </Box>
                        </Flex>
                        <Flex gap={16} alignItems="center">
                            <Text>Closed Date:</Text>
                            <Box width={200} marginLeft={3}>
                                <Input placeholder='Select Date' size='md' type='date' />
                            </Box>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Text>Target Closure Date:</Text>
                            <Box width={200}>
                                <Input placeholder='Select Date' size='md' type='date' />
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={14} alignItems="center">
                            <Text>Owner:</Text>
                            <Box width={200} marginLeft={1}>
                                <Input size='md' type='text' />
                            </Box>
                        </Flex>
                        <Flex gap={10} alignItems="center">
                            <Text>Nominee:</Text>
                            <Box width={200} marginLeft={1}>
                                <Input size='md' type='text' />
                            </Box>
                        </Flex>
                        <Flex gap={10} alignItems="center">
                            <Text>Reviewer:</Text>
                            <Box width={200} marginLeft={1}>
                                <Input size='md' type='text' />
                            </Box>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Text>Review Date:</Text>
                            <Box width={200}>
                                <Input placeholder='Select Date' size='md' type='date' />
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Box mt={8}>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Documents:</Text>
                </GridItem>
                <Box mt={4}>
                    <DocumentUploader handleFileChange={handleFileChange} multiple />
                    {uploadedFiles.map((file, index) => (
                        <Box key={index} mt={4}>
                            {renderPreview(file)}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Details;
