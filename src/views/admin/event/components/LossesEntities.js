import { Box, Button, Flex, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from '@chakra-ui/react'
import React from 'react';
import { FaFilePen } from "react-icons/fa6";
import DetailsForm from './DetailsForm';
import Financials from './Financials';
import Commentary from './commentary';

const LossesEntities = ({
    ...rest
}) => {
    const [value, setValue] = React.useState('');
    const handleChange = (event) => setValue(event.target.value)
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
                        <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='30/01/2023'
                            size='sm'
                        />
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
                        <DetailsForm />
                    </TabPanel>
                    <TabPanel>
                        <Commentary />
                    </TabPanel>
                    <TabPanel><Financials /></TabPanel>
                    <TabPanel>4</TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default LossesEntities
