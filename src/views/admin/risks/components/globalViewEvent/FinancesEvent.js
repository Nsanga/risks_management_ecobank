import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const FinancesEvent = ({ financesData }) => {
  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="start"></Th>
            <Th textAlign="start" fontSize={12}>Total</Th>
            <Th textAlign="start" fontSize={12}>Direct</Th>
            <Th textAlign="start" fontSize={12}>Regulatory fines</Th>
            <Th textAlign="start" fontSize={12}>Asset write-down</Th>
            <Th textAlign="start" fontSize={12}>Other</Th>
          </Tr>
        </Thead>
        <Tbody>
          {financesData.map(row => (
            <Tr key={row.id}>
              <Td fontSize={14} width='15%'>{row.name}</Td>
              {row.values.map((value, index) => (
                <Td key={index}>
                  {value}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default FinancesEvent;
