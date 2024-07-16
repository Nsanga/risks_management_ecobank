import { Flex, Input, Text, Textarea, Box, Checkbox, Grid, GridItem, Button } from '@chakra-ui/react';
import Select from 'react-select';
import { FaFilePdf, FaFileWord, FaFileAlt, FaFileImage } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import DocumentUploader from './DocumentUploader';
import Profiles from '../profiles';

const Details = ({ onDetailsChange }) => {
    const [options, setOptions] = useState([]);
    const [formData, setFormData] = useState({
        eventDate: '',
        RAG: '',
        activeEvent: false,
        eventTime: '',
        excludeFundLosses: false,
        externalEvent: false,
        externalRef: '',
        notify: false,
        entityAreaOfDetection: '',
        subEntityAreaOfDetection: '',
        detectionDate: '',
        entityAreaOfOrigin: '',
        subEntityAreaOfOrigin: '',
        description: '',
        descriptionDetailled: '',
        approvedDate: '',
        closedDate: '',
        targetClosureDate: '',
        owner: { value: '', label: '' },
        nominee: { value: '', label: '' },
        reviewer: '',
        reviewerDate: '',
        documents: []
    });

    useEffect(() => {
        const loadOptions = async () => {
            const formattedOptions = Profiles.map(user => ({
                value: user.id,
                label: `${user.name}`
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

    const handleInputChange = (field, value) => {
        setFormData(prevData => {
            const newData = { ...prevData, [field]: value };
            onDetailsChange(newData); // Notify parent about changes
            return newData;
        });
    };

    return (
        <Box>
            <Flex flexDirection='column' gap={4}>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={6} alignItems="center">
                        <Text fontSize={14}>Event Date :</Text>
                        <Box width={200}>
                            <Input placeholder='Select Date' size='sm' type='date' value={formData.eventDate} onChange={(e) => handleInputChange('eventDate', e.target.value)} />
                        </Box>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>RAG :</Text>
                        <Box width={200}>
                            <Select placeholder="Select RAG" styles={customStyles} value={options.find(option => option.value === formData.RAG)} onChange={(selectedOption) => handleInputChange('RAG', selectedOption ? selectedOption.value : '')}/>
                        </Box>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm' isChecked={formData.activeEvent} onChange={(e) => handleInputChange('activeEvent', e.target.checked)}>Active Event</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>Event Time :</Text>
                        <Box width={200}>
                            <Input placeholder='Select Date and Time' size='sm' type='time' value={formData.eventTime} onChange={(e) => handleInputChange('eventTime', e.target.value)}/>
                        </Box>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>Recorded by :</Text>
                        <Text color='blue' fontSize={14}>Georges MOUMPOU</Text>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>On :</Text>
                        <Text color='blue' fontSize={14}>30/03/2023</Text>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm' isChecked={formData.excludeFundLosses} onChange={(e) => handleInputChange('excludeFundLosses', e.target.checked)}>Exclude Fund Losses</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Checkbox size='sm' isChecked={formData.externalEvent} onChange={(e) => handleInputChange('externalEvent', e.target.checked)}>External Event</Checkbox>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>External Ref :</Text>
                        <Box >
                            <Input placeholder='Select Date and Time' size='sm' type='text' value={formData.externalRef} onChange={(e) => handleInputChange('externalRef', e.target.value)}/>
                        </Box>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm' isChecked={formData.notify} onChange={(e) => handleInputChange('notify', e.target.checked)}>Notify</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Box p={5} shadow='md' borderWidth='1px' width='49%'>
                        <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                            Area of Detection
                        </Box>
                        <Flex flexDirection='column' gap={4}>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Entity : <span style={{color:'red'}}>*</span></Text>
                                <Box width={200}>
                                    <Select placeholder="Select Entity" styles={customStyles} value={options.find(option => option.value === formData.entityAreaOfDetection)} onChange={(selectedOption) => handleInputChange('entityAreaOfDetection', selectedOption ? selectedOption.value : '')}/>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Sub Entity :</Text>
                                <Box width={200}>
                                    <Input placeholder='' size='sm' type='text' value={formData.subEntityAreaOfDetection} onChange={(e) => handleInputChange('subEntityAreaOfDetection', e.target.value)}/>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Detection Date :</Text>
                                <Box width={200}>
                                    <Input placeholder='Select Date' size='sm' type='date' value={formData.detectionDate} onChange={(e) => handleInputChange('detectionDate', e.target.value)}/>
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
                                <Text fontSize={14}>Entity :</Text>
                                <Box width={200}>
                                    <Select placeholder="Select Entity" styles={customStyles} value={options.find(option => option.value === formData.entityAreaOfOrigin)} onChange={(selectedOption) => handleInputChange('entityAreaOfOrigin', selectedOption ? selectedOption.value : '')}/>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Sub Entity :</Text>
                                <Box width={200}>
                                    <Input placeholder='' size='sm' type='text' value={formData.subEntityAreaOfOrigin} onChange={(e) => handleInputChange('subEntityAreaOfOrigin', e.target.value)}/>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Box pt={5} pb={5}>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Description <span style={{color:'red'}}>*</span>
                    </Box>
                    <Input placeholder='Event description' size='sm' value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)}/>
                </Box>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Detailed Description
                    </Box>
                    <Textarea placeholder='Description détaillée' size='sm' value={formData.descriptionDetailled} onChange={(e) => handleInputChange('descriptionDetailled', e.target.value)}/>
                </Box>
                <Flex justifyContent='space-between' pt={5}>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={20} alignItems="center">
                            <Text fontSize={14}>Approved  :</Text>
                            <Box width={200} >
                                <Input placeholder='Select Date' size='sm' type='date' value={formData.approvedDate} onChange={(e) => handleInputChange('approvedDate', e.target.value)}/>
                            </Box>
                        </Flex>
                        <Flex gap={14} alignItems="center">
                            <Text fontSize={14}>Closed Date :</Text>
                            <Box width={200} marginLeft={3}>
                                <Input placeholder='Select Date' size='sm' type='date' value={formData.closedDate} onChange={(e) => handleInputChange('closedDate', e.target.value)}/>
                            </Box>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Text fontSize={14}>Target Closure Date :</Text>
                            <Box width={200}>
                                <Input placeholder='Select Date' size='sm' type='date' value={formData.targetClosureDate} onChange={(e) => handleInputChange('targetClosureDate', e.target.value)}/>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={10} alignItems="center">
                            <Text fontSize={14}>Owner : <span style={{color:'red'}}>*</span></Text>
                            <Box width={200} marginLeft={1}>
                                <Select options={options} styles={customStyles} placeholder='Select owner' value={options.find(option => option.value === formData.owner.value)} onChange={(selectedOption) => handleInputChange('owner', selectedOption ? { value: selectedOption.value, label: selectedOption.label } : { value: '', label: '' })}/>
                            </Box>
                        </Flex>
                        <Flex gap={8} alignItems="center">
                            <Text fontSize={14}>Nominee : <span style={{color:'red'}}>*</span></Text>
                            <Box width={200} >
                            <Select options={options} styles={customStyles} placeholder='Select nominee' value={options.find(option => option.value === formData.nominee.value)} onChange={(selectedOption) => handleInputChange('nominee', selectedOption ? { value: selectedOption.value, label: selectedOption.label } : { value: '', label: '' })}/>
                            </Box>
                        </Flex>
                        <Flex gap={10} alignItems="center">
                            <Text fontSize={14}>Reviewer :</Text>
                            <Box width={200} marginLeft={1}>
                                <Input size='sm' type='text' value={formData.reviewer} onChange={(e) => handleInputChange('reviewer', e.target.value)}/>
                            </Box>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Text fontSize={14}>Review Date :</Text>
                            <Box width={200}>
                                <Input placeholder='Select Date' size='sm' type='date' value={formData.reviewerDate} onChange={(e) => handleInputChange('reviewerDate', e.target.value)}/>
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
                    <DocumentUploader onMediaUpload={(url) => handleInputChange('documents', [...formData.documents, url])}  />
                </Box>
            </Box>
        </Box>
    );
}

export default Details;
