import { Flex, Input, Text, Textarea, Box, Checkbox, Grid, GridItem, Button } from '@chakra-ui/react';
import Select from 'react-select';
import { FaFilePdf, FaFileWord, FaFileAlt, FaFileImage } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import DocumentUploader from './DocumentUploader';
import Profiles from '../profiles';

const Details = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

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

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const loadOptions = async () => {
            const formattedOptions = Profiles.map(user => ({
                value: user.id,
                label: `${user.email}`
            }));
            setOptions(formattedOptions);
        };

        loadOptions();
    }, []);

    const customStyles = {
        control: (provided) => ({
          ...provided,
          fontSize: '14px'
        }),
        menu: (provided) => ({
          ...provided,
          fontSize: '14px'
        }),
        option: (provided) => ({
          ...provided,
          fontSize: '14px'
        }),
        singleValue: (provided) => ({
          ...provided,
          fontSize: '14px'
        })
      };

    return (
        <Box >
            <Flex flexDirection='column' gap={4}>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={6} alignItems="center">
                        <Text fontSize={14}>Event Date:</Text>
                        <Box width={200}>
                            <Input placeholder='Select Date' size='sm' type='date' />
                        </Box>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>RAG:</Text>
                        <Box width={200}>
                            <Select placeholder="Select RAG" styles={customStyles}/>
                        </Box>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm'>Active Event</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>Event Time:</Text>
                        <Box width={200}>
                            <Input placeholder='Select Date and Time' size='sm' type='time' />
                        </Box>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>Recorded by:</Text>
                        <Text color='blue'>Georges MOUMPOU</Text>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>On:</Text>
                        <Text color='blue'>30/03/2023</Text>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm'>Exclude Fund Losses</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Checkbox size='sm'>External Event</Checkbox>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>External Ref:</Text>
                        <Box >
                            <Input placeholder='Select Date and Time' size='sm' type='text' />
                        </Box>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm'>Notify</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Box p={5} shadow='md' borderWidth='1px' width='49%'>
                        <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                            Area of Detection
                        </Box>
                        <Flex flexDirection='column' gap={4}>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Entity:</Text>
                                <Box width={200}>
                                    <Select placeholder="Select Entity" styles={customStyles}/>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Sub Entity:</Text>
                                <Box width={200}>
                                    <Input placeholder='' size='sm' type='text' />
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Detection Date:</Text>
                                <Box width={200}>
                                    <Input placeholder='Select Date' size='sm' type='date' />
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
                                <Text fontSize={14}>Entity:</Text>
                                <Box width={200}>
                                    <Select placeholder="Select Entity" styles={customStyles}/>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Sub Entity:</Text>
                                <Box width={200}>
                                    <Input placeholder='' size='sm' type='text'/>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Box pt={5} pb={5}>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Description
                    </Box>
                    <Input placeholder='Event description' size='sm'/>
                </Box>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Detailed Description
                    </Box>
                    <Textarea placeholder='Description détaillée' size='sm'/>
                </Box>
                <Flex justifyContent='space-between' pt={5}>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={12} alignItems="center">
                            <Text fontSize={14}>Approved Date:</Text>
                            <Box width={200} marginLeft={1}>
                                <Input placeholder='Select Date' size='sm' type='date' />
                            </Box>
                        </Flex>
                        <Flex gap={14} alignItems="center">
                            <Text fontSize={14}>Closed Date:</Text>
                            <Box width={200} marginLeft={3}>
                                <Input placeholder='Select Date' size='sm' type='date' />
                            </Box>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Text fontSize={14}>Target Closure Date:</Text>
                            <Box width={200}>
                                <Input placeholder='Select Date' size='sm' type='date' />
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={14} alignItems="center">
                            <Text fontSize={14}>Owner:</Text>
                            <Box width={200} marginLeft={1}>
                                <Select options={options} styles={customStyles} placeholder='Select e-mail'/>
                            </Box>
                        </Flex>
                        <Flex gap={10} alignItems="center">
                            <Text fontSize={14}>Nominee:</Text>
                            <Box width={200} marginLeft={1}>
                                <Input size='sm' type='text' />
                            </Box>
                        </Flex>
                        <Flex gap={10} alignItems="center">
                            <Text fontSize={14}>Reviewer:</Text>
                            <Box width={200} marginLeft={1}>
                                <Input size='sm' type='text' />
                            </Box>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Text fontSize={14}>Review Date:</Text>
                            <Box width={200}>
                                <Input placeholder='Select Date' size='sm' type='date' />
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Box mt={8}>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold" fontSize={14}>Documents<span style={{ fontStyle: 'italic' }}> (Importer vos documents dans l'espace ci-dessous)</span></Text>
                </GridItem>
                <Box mt={4}>
                    <DocumentUploader />
                </Box>
            </Box>

        </Box>
    );
}

export default Details;
