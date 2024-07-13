import { Flex, Input, Text, Select, Textarea, Box, Checkbox, Grid, GridItem, Button } from '@chakra-ui/react';
import { FaFilePdf, FaFileWord, FaFileAlt, FaFileImage } from 'react-icons/fa';
import React, { useState } from 'react';

const Details = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (event) => {
        setUploadedFiles([...uploadedFiles, ...Array.from(event.target.files)]);
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
                <Box textAlign="center">
                    {renderIcon(file)}
                    <Text mt={2}>{file.name}</Text>
                    <Box mt={2}>
                        <img src={URL.createObjectURL(file)} alt={file.name} style={{ maxWidth: '50%', height: 'auto' }} />
                    </Box>
                </Box>
            );
        } else if (fileType === 'application/pdf') {
            return (
                <Box textAlign="center">
                    {renderIcon(file)}
                    <Text mt={2}>{file.name}</Text>
                    <Box mt={2}>
                        <iframe src={URL.createObjectURL(file)} title={file.name} width="50%" height="50px" style={{ border: 'none' }}></iframe>
                    </Box>
                </Box>
            );
        } else {
            return (
                <Box textAlign="center">
                    {renderIcon(file)}
                    <Text mt={2}>{file.name}</Text>
                </Box>
            );
        }
    };

    return (
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="8px" width="100%">
            <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                {/* First Row */}
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Event Date:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="date" />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">RAG:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Select placeholder="Select RAG">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </Select>
                </GridItem>

                {/* Second Row */}
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Event Time:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="time" />
                </GridItem>
                <GridItem colSpan={1}>
                    <Checkbox>Active Event</Checkbox>
                </GridItem>
                <GridItem colSpan={2}></GridItem>

                {/* Third Row */}
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Recorded By:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                </GridItem>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">On:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                </GridItem>

                {/* Fourth Row */}
                <GridItem colSpan={1}>
                    <Checkbox>External Event</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontWeight="bold">External Ref:</Text>
                </GridItem>
                <GridItem colSpan={3}>
                    <Input placeholder="Enter reference" />
                </GridItem>

                {/* Fifth and Sixth Row */}
                <GridItem colSpan={3}>
                    <Box p={5} shadow="md" borderWidth="1px" borderRadius="8px">
                        <Text fontWeight="bold" mb={4}>Area of Detection</Text>
                        <Flex direction="column" gap={2}>
                            <Text>Entity:</Text>
                            <Select placeholder="Select Entity">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </Select>
                            <Text>Sub Entity:</Text>
                            <Select placeholder="Select Sub Entity">
                                <option value="suboption1">Sub Option 1</option>
                                <option value="suboption2">Sub Option 2</option>
                            </Select>
                            <Text>Detection Date:</Text>
                            <Input type="date" />
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem colSpan={3}>
                    <Box p={5} shadow="md" borderWidth="1px" borderRadius="8px">
                        <Text fontWeight="bold" mb={4}>Area of Origin</Text>
                        <Flex direction="column" gap={2}>
                            <Text>Entity:</Text>
                            <Select placeholder="Select Entity">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </Select>
                            <Text>Sub Entity:</Text>
                            <Select placeholder="Select Sub Entity">
                                <option value="suboption1">Sub Option 1</option>
                                <option value="suboption2">Sub Option 2</option>
                            </Select>
                        </Flex>
                    </Box>
                </GridItem>

                {/* Seventh Row */}
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Description:</Text>
                </GridItem>
                <GridItem colSpan={5}>
                    <Input type="text" placeholder="Enter description" />
                </GridItem>

                {/* Eighth Row */}
                <GridItem colSpan={6}>
                    <Text fontWeight="bold">Detailed Description:</Text>
                    <Textarea placeholder="Enter detailed description" />
                </GridItem>

                {/* Ninth Row */}
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Approved Date:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="date" />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Owner:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="text" placeholder="Enter owner" />
                </GridItem>

                {/* Tenth Row */}
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Closed Date:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="date" />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Nominee:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="text" placeholder="Enter nominee" />
                </GridItem>

                {/* Eleventh Row */}
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Target Closure Date:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="date" />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Reviewer:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="text" placeholder="Enter reviewer" />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Review Date:</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input type="date" />
                </GridItem>

                {/* Twelfth Row */}
                <Flex>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold">Documents:</Text>
                </GridItem>
                <GridItem colSpan={5}>
                    <Input type="file" multiple onChange={handleFileChange} />
                    <Flex direction="column" gap={2} marginBottom={2}>
                        {uploadedFiles.map((file, index) => (
                            <Box key={index} borderWidth="1px" borderRadius="10px" p={2} width="fit-content">
                                {renderPreview(file)}
                            </Box>
                        ))}
                    </Flex>
                </GridItem>
                </Flex>

                {/* Action Buttons */}
                <GridItem colSpan={6}>
                    <Flex justifyContent="center" mt={4}>
                        <Button colorScheme="green" mr={2}>Save And Approve</Button>
                        <Button colorScheme="blue" mr={2}>Save</Button>
                        <Button colorScheme="red" mr={2}>Cancel</Button>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Details;
