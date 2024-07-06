import { Flex, Input, Text, Select, Textarea, Box } from '@chakra-ui/react';
import React from 'react'

const Details = () => {
    return (
        <Flex direction="column" gap={4}>
            <Flex alignItems="center" gap={2}>
                <Text>Event Date:</Text>
                <Input type="date" />
            </Flex>
            <Flex alignItems="center" gap={2}>
                <Text>Event Time:</Text>
                <Input type="time" />
            </Flex>
            <Flex alignItems="center" gap={2}>
                <Text>Recorded By:</Text>
                <Input type="text" />
            </Flex>
            <Flex alignItems="center" gap={2}>
                <Text>Recorded Date:</Text>
                <Input type="date" />
            </Flex>
            <Flex alignItems="center" gap={2}>
                <Text>Entity:</Text>
                <Input type="text" />
            </Flex>

            <Flex gap={4}>
                <Box p={5} shadow='md' borderWidth='1px' width='50%'>
                    <Flex direction="column" gap={4} flex="1">
                        <Text fontWeight="bold">Area of Origin</Text>
                        <Flex alignItems="center" gap={2}>
                            <Text>Entity:</Text>
                            <Select>
                                <option value="">Select Entity</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </Select>
                        </Flex>
                        <Flex alignItems="center" gap={2}>
                            <Text>Sub Entity:</Text>
                            <Select>
                                <option value="">Select Sub Entity</option>
                                <option value="suboption1">Sub Option 1</option>
                                <option value="suboption2">Sub Option 2</option>
                            </Select>
                        </Flex>
                        <Flex alignItems="center" gap={2}>
                            <Text>Detection Date:</Text>
                            <Input type="date" />
                        </Flex>

                    </Flex>
                </Box>
                <Box p={5} shadow='md' borderWidth='1px' width='50%'>
                    <Flex direction="column" gap={4} flex="1">
                        <Text fontWeight="bold">Area of Detection</Text>
                        <Flex alignItems="center" gap={2}>
                            <Text>Entity:</Text>
                            <Select>
                                <option value="">Select Entity</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </Select>
                        </Flex>
                        <Flex alignItems="center" gap={2}>
                            <Text>Sub Entity:</Text>
                            <Select>
                                <option value="">Select Sub Entity</option>
                                <option value="suboption1">Sub Option 1</option>
                                <option value="suboption2">Sub Option 2</option>
                            </Select>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>

            <Flex alignItems="center" gap={2}>
                <Text>Description:</Text>
                <Input type="text" />
            </Flex>
            <Flex direction="column" gap={4} flex="2">
                <Text fontWeight="bold">Detailed Description</Text>
                <Textarea />
            </Flex>
        </Flex>
    );
}

export default Details;
