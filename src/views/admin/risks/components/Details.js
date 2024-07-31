import { Flex, Input, Text, Textarea, Box, Checkbox, Grid, GridItem, Button } from '@chakra-ui/react';
import Select from 'react-select';
import { FaFilePdf, FaFileWord, FaFileAlt, FaFileImage } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import DocumentUploader from './DocumentUploader';
import Profiles from '../profiles';
import Entity from '../entity';
import RAG from '../RAG';
import entityAreaOfOrigin from '../entityOfOrigin';

const Details = ({ onDetailsChange }) => {
    const [options, setOptions] = useState([]);
    const [entity, setEntity] = useState([]);
    const [entityOfOrigin, setEntityOfOrigin] = useState([]);
    const [rag, setRag] = useState([]);
    const [formData, setFormData] = useState({
        event_date: '',
        RAG: '',
        activeEvent: false,
        event_time: '',
        excludeFundLosses: false,
        externalEvent: false,
        recorded_by: '',
        recorded_date: '',
        externalRef: '',
        notify: false,
        entityOfDetection: '',
        subentityOfDetection: '',
        detection_date: '',
        entityOfOrigin: '',
        subentityOfOrigin: '',
        description: '',
        descriptionDetailled: '',
        approved_date: '',
        closed_date: '',
        targetClosureDate: '',
        owner: { value: '', label: '' },
        nominee: { value: '', label: '' },
        reviewer: '',
        reviewer_date: '',
        documents: []
    });

    useEffect(() => {
        const loadOptions = async () => {
            const formattedOptions = Profiles.map(user => ({
                value: user.id,
                label: `${user.email}`
            }));
            setOptions(formattedOptions);
        };

        const loadEntity = async () => {
            const formattedEntities = Entity.map(entity => ({
                value: entity.id,
                label: `${entity.name}`
            }));
            setEntity(formattedEntities);
        };

        const loadEntityOfOrigin = async () => {
            const formattedEntityOfOrigin = entityAreaOfOrigin.map(entity => ({
                value: entity.id,
                label: `${entity.name}`
            }));
            setEntityOfOrigin(formattedEntityOfOrigin);
        };

        const loadRag = async () => {
            const formattedRag = RAG.map(rag => ({
                value: rag.id,
                label: `${rag.name}`
            }));
            setRag(formattedRag);
        };

        loadOptions();
        loadEntity();
        loadEntityOfOrigin();
        loadRag();
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

    const handleUploadLinks = (newLinks) => {
        setFormData(prevData => {
            const updatedDocuments = [...prevData.documents, ...newLinks];
            const newData = { ...prevData, documents: updatedDocuments };
            onDetailsChange(newData); // Notify parent about changes
            return newData;
        });
    };

    const recordedName = localStorage.getItem('username');

    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Les mois sont de 0 à 11
        const day = String(currentDate.getDate()).padStart(2, '0');

        // Format YYYY-MM-DD
        const formattedDate = `${day}/${month}/${year}`;

        return formattedDate;
    }

    const currentDate = getCurrentDate();

    const handleSubmit = () => {
        console.log('Payload:', formData);
    };

    return (
        <Box>
            <Box pt={5} pb={5}>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Description <span style={{color:'red'}}>*</span>
                    </Box>
                    <Input placeholder='Event description' size='sm' value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)}/>
                </Box>
                <Box p={5} shadow='md' borderWidth='1px' mb={6}>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Detailed Description
                    </Box>
                    <Textarea placeholder='Description détaillée' size='sm' value={formData.descriptionDetailled} onChange={(e) => handleInputChange('descriptionDetailled', e.target.value)}/>
                </Box>
            <Flex flexDirection='column' gap={4}>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={6} alignItems="center">
                        <Text fontSize={14}>Event Date :</Text>
                        <Box width={200}>
                            <Input placeholder='Select Date' size='sm' type='date' value={formData.event_date} onChange={(e) => handleInputChange('event_date', e.target.value)} />
                        </Box>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>RAG :</Text>
                        <Box width={200}>
                            <Select options={rag} styles={customStyles} placeholder='Select RAG' value={rag.find(rag => rag.value === formData.RAG.value)} onChange={(selectedOption) => handleInputChange('RAG', selectedOption ? { value: selectedOption.value, label: selectedOption.label } : { value: '', label: '' })}/>
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
                            <Input placeholder='Select Date and Time' size='sm' type='time' value={formData.event_time} onChange={(e) => handleInputChange('event_time', e.target.value)}/>
                        </Box>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>Recorded by :</Text>
                        <Text color='blue' fontSize={14}>{recordedName}</Text>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>On :</Text>
                        <Text color='blue' fontSize={14}>{currentDate}</Text>
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
                            <Input placeholder='External Ref' size='sm' type='text' value={formData.externalRef} onChange={(e) => handleInputChange('externalRef', e.target.value)}/>
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
                                    <Select options={entity} styles={customStyles} placeholder='Select Entity' value={entity.find(entity => entity.value === formData.entityOfDetection.value)} onChange={(selectedOption) => handleInputChange('entityOfDetection', selectedOption ? { value: selectedOption.value, label: selectedOption.label } : { value: '', label: '' })}/>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Sub Entity :</Text>
                                <Box width={200}>
                                    <Input placeholder='' size='sm' type='text' value={formData.subentityOfDetection} onChange={(e) => handleInputChange('subentityOfDetection', e.target.value)}/>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Detection Date :</Text>
                                <Box width={200}>
                                    <Input placeholder='Select Date' size='sm' type='date' value={formData.detection_date} onChange={(e) => handleInputChange('detection_date', e.target.value)}/>
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
                                    <Select options={entityOfOrigin} styles={customStyles} placeholder='Select Entity' value={entityOfOrigin.find(entityOfOrigin => entityOfOrigin.value === formData.entityOfOrigin.value)} onChange={(selectedOption) => handleInputChange('entityOfOrigin', selectedOption ? { value: selectedOption.value, label: selectedOption.label } : { value: '', label: '' })}/>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Sub Entity :</Text>
                                <Box width={200}>
                                    <Input placeholder='' size='sm' type='text' value={formData.subentityOfOrigin} onChange={(e) => handleInputChange('subentityOfOrigin', e.target.value)}/>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Flex justifyContent='space-between' pt={5}>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={20} alignItems="center">
                            <Text fontSize={14}>Approved  :</Text>
                            <Box width={200} >
                                <Input placeholder='Select Date' size='sm' type='date' value={formData.approved_date} onChange={(e) => handleInputChange('approved_date', e.target.value)}/>
                            </Box>
                        </Flex>
                        <Flex gap={14} alignItems="center">
                            <Text fontSize={14}>Closed Date :</Text>
                            <Box width={200} marginLeft={3}>
                                <Input placeholder='Select Date' size='sm' type='date' value={formData.closed_date} onChange={(e) => handleInputChange('closed_date', e.target.value)}/>
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
                                <Input placeholder='Select Date' size='sm' type='date' value={formData.reviewer_date} onChange={(e) => handleInputChange('reviewer_date', e.target.value)}/>
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
                    <DocumentUploader onMediaUpload={handleUploadLinks}  />
                </Box>
            </Box>
        </Box>
    );
}

export default Details;
