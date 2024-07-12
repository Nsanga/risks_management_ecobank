import { Box, Checkbox, Flex, Input, Select, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const DetailsForm = () => {
    const [value, setValue] = React.useState('');
    return (
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
                        <Select size='md' />
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
                <Flex gap={5} alignItems="center">
                    <Text>Recorded by:</Text>
                    <Text color='blue'>Georges MOUMPOU</Text>
                </Flex>
                <Flex gap={5} alignItems="center">
                    <Text>On:</Text>
                    <Text color='blue'>30/03/2023 at 15:00</Text>
                </Flex>
                <Flex width={155}>
                    <Checkbox defaultChecked>Exclude Fund Losses</Checkbox>
                </Flex>
            </Flex>
            <Flex justifyContent='space-between' alignItems="center">
                <Checkbox defaultChecked>External Event</Checkbox>
                <Flex gap={5} alignItems="center">
                    <Text>External Ref:</Text>
                    <Box >
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
                                <Select size='md' />
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
                                <Select size='md' />
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
                        <Box width={200}  marginLeft={1}>
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
    )
}

export default DetailsForm
