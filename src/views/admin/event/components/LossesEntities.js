import { Box, Button, Flex, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { FaFilePen } from "react-icons/fa6";
import Financials from './Financials';
import Profiles from 'views/admin/risks/profiles';
import Entity from 'views/admin/risks/entity';
import entityAreaOfOrigin from 'views/admin/risks/entityOfOrigin';
import RAG from 'views/admin/risks/RAG';
import Details from 'views/admin/risks/components/Details';
import Commentary from 'views/admin/risks/components/Commentary';

const LossesEntities = ({
    event,
    ...rest
}) => {
    const [value, setValue] = React.useState('');
    const [detailsData, setDetailsData] = useState({});
    const handleChange = (event) => setValue(event.target.value)

    const handleDetailsChange = (data) => {
        setDetailsData(data);
    };

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
            return newData;
        });
    };

    return (
        <Box p={5} shadow='md' borderWidth='1px' {...rest} mt={6}>
            <Box bg='green.400' color='#FFF' padding={2}>
                Losses Entities
            </Box>
            <Flex justifyContent='flex-end' m={6}>
                <Button leftIcon={<FaFilePen />} variant='outline' colorScheme='blue'>Amend Effective Date</Button>
            </Flex>
            <Flex flexDirection='column' gap={2} mb={8}>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center' gap={8}>
                        <Text>Date:</Text>
                        <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='30/01/2023'
                            size='sm'
                        />
                    </Flex>
                    <Flex alignItems='center' gap={4}>
                        <Text>Owner: </Text>
                        <Box width={200} marginLeft={1}>
                            <Select options={options} styles={customStyles} placeholder='Select owner' value={options.find(option => option.value === formData.owner.value)} onChange={(selectedOption) => handleInputChange('owner', selectedOption ? { value: selectedOption.value, label: selectedOption.label } : { value: '', label: '' })} />
                        </Box>
                    </Flex>
                    <Flex alignItems='center' gap={4}>
                        <Text>Head Office Currency: </Text>
                        <Box width={59}>
                            <Input
                                value={value}
                                onChange={handleChange}
                                placeholder='USD'
                                size='sm'
                            />
                        </Box>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Flex gap={5}>
                        <Text>Cause:</Text>
                        <Flex style={{ width: '470px' }}>
                            <Input
                                value={value}
                                onChange={handleChange}
                                placeholder='Debit Card fraud'
                                size='sm'
                            />
                        </Flex>
                    </Flex>
                    <Flex>
                        <Box width='100%'>
                            <Text>Increment Currency:</Text>
                        </Box>
                        <Box width={20}>
                            <Input
                                value={value}
                                onChange={handleChange}
                                placeholder='USD'
                                size='sm'
                            />
                        </Box>
                    </Flex>
                </Flex>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center' gap={8}>
                        <Text>Rate: </Text>
                        <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='30/01/2023'
                            size='sm'
                        />
                    </Flex>
                    <Flex alignItems='center'>
                        <Box width='100%'>
                            <Text>Effective Date:</Text>
                        </Box>
                        <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='30/01/2023'
                            size='sm'
                        />
                    </Flex>
                </Flex>
            </Flex>
            <Tabs>
                <TabList>
                    <Tab>Details</Tab>
                    <Tab >Commentary</Tab>
                    <Tab>Financials</Tab>
                    <Tab >Additional info</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Details eventDetails={event} onDetailsChange={handleDetailsChange} />
                    </TabPanel>
                    <TabPanel>
                        <Commentary eventDetails={event}/>
                    </TabPanel>
                    <TabPanel><Financials /></TabPanel>
                    <TabPanel>4</TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default LossesEntities