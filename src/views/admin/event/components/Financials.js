import React, { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Flex,
    Text,
    Input,
    Select,
} from '@chakra-ui/react'

const Financials = () => {
    const [value, setValue] = useState();
    return (
        <Box>
            <Flex alignItems='center' justifyContent='space-between' mb={12}>
                <Flex alignItems='center' gap={8}>
                    <Box width='100%'>
                        <Text>Head office Currency: </Text>
                    </Box>
                    <Input
                        value={value}
                        placeholder='USD'
                        size='sm'
                    />
                </Flex>
                <Flex alignItems='center' gap={4}>
                    <Box width='100%'>
                        <Text>Total Currencies:</Text>
                    </Box>
                    <Select size='md' />
                </Flex>
            </Flex>
            <Box p={5} shadow='md' borderWidth='1px'>
                <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                    Direct for event
                </Box>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>Total</Th>
                                <Th isNumeric>Direct</Th>
                                <Th isNumeric>Regulatory Fines</Th>
                                <Th isNumeric>Asset write-down</Th>
                                <Th isNumeric>Other</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Actual Loss</Td>
                                <Td>1,047</Td>
                                <Td isNumeric>1,047</Td>
                                <Td isNumeric>0</Td>
                                <Td isNumeric>0</Td>
                                <Td isNumeric>0</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <Box p={5} shadow='md' borderWidth='1px' mt={8}>
                <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                    Indirect for event
                </Box>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>Total</Th>
                                <Th isNumeric>Indirect</Th>
                                <Th isNumeric>Business Disrption</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Actual Loss</Td>
                                <Td isNumeric>0</Td>
                                <Td isNumeric>0</Td>
                                <Td isNumeric>0</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Financials
