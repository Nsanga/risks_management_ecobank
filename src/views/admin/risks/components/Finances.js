import { Box, Flex, Input, Text, Select, Textarea } from '@chakra-ui/react';
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
} from '@chakra-ui/react'
import React, { useState } from 'react';

const Finances = () => {
  const [value, setvalue] = useState();
  return (
    <Box>
      <Flex alignItems="center" justify="space-between" mb={12}>
        <Flex align="center" gap={8}>
          <Box width='100%'>
            <Text>Head office currency:</Text>
          </Box>
          <Input
            value={value}
            placeholder='USD'
            size='sm'
          />
        </Flex>
        <Flex align="center" gap={4}>
          <Box width='100%'>
            <Text>Total currencies:</Text>
          </Box>
          <Select>
            <option value="USD">USD</option>
            <option value="XAF">XAF</option>
            <option value="EUR">EUR</option>
            <option value="YEN">YEN</option>
          </Select>
        </Flex>
      </Flex>
      <Box p={5} shadow='md' borderWidth='1px'>
        <Flex direction="column" gap={4} flex="2">
          <Text fontWeight="bold">Direct for event </Text>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Total</Th>
                  <Th isNumeric>Direct</Th>
                  <Th isNumeric>Regulatory fines</Th>
                  <Th isNumeric>Asset write-down</Th>
                  <Th isNumeric>Orther</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Actual loss</Td>
                  <Td>1,047</Td>
                  <Td isNumeric>1,047</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
      <Box p={5} shadow='md' borderWidth='1px'mt={8}>
        <Flex direction="column" gap={4} flex="2">
          <Text fontWeight="bold">Indirect for event </Text>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Total</Th>
                  <Th isNumeric>Indirect</Th>
                  <Th isNumeric>Business Description</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Actual loss</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
    </Box>
  );
}

export default Finances;
