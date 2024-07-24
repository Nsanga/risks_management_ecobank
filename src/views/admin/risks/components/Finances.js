import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Input, Box } from '@chakra-ui/react';

const Finances = ({ onFinancesChange }) => {
  const initialData = [
    { id: 1, name: 'Actual Loss', values: [0, 0, 0, 0, 0] },
    { id: 2, name: 'Potential Loss', values: [0, 0, 0, 0, 0] },
    { id: 3, name: 'Actual Recovery', values: [0, 0, 0, 0, 0] },
    { id: 4, name: 'Expected Recovery', values: [0, 0, 0, 0, 0] },
    { id: 5, name: 'Recovery Expenses', values: [0, 0, 0, 0, 0] },
    { id: 6, name: 'Insurance Recovery', values: [0, 0, 0, 0, 0] },
    { id: 7, name: 'Near Miss', values: [0, 0, 0, 0, 0] },
    { id: 8, name: 'Total', values: [0, 0, 0, 0, 0] }
  ];

  const [tableData, setTableData] = useState(initialData);

  const calculateTotals = (data) => {
    const totals = [0, 0, 0, 0, 0];
    data.forEach(row => {
      if (row.name !== 'Total') {
        row.values.forEach((value, index) => {
          totals[index] += value;
        });
      }
    });
    return totals;
  };

  const handleInputChange = (id, index, value) => {
    const newData = tableData.map(row => {
      if (row.id === id) {
        const newValues = [...row.values];
        newValues[index] = value === '' ? 0 : parseInt(value, 10);
        return { ...row, values: newValues };
      }
      return row;
    });

    const totals = calculateTotals(newData);

    const updatedData = newData.map(row => {
      if (row.name === 'Total') {
        return { ...row, values: totals };
      }
      return row;
    });

    setTableData(updatedData);
    onFinancesChange(updatedData); // Notify parent about changes
  };

  useEffect(() => {
    const totals = calculateTotals(tableData);
    setTableData(prevData => prevData.map(row => {
      if (row.name === 'Total') {
        return { ...row, values: totals };
      }
      return row;
    }));
  }, []);

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
          {tableData.map(row => (
            <Tr key={row.id}>
              <Td fontSize={14} width='15%'>{row.name}</Td>
              {row.values.map((value, index) => (
                <Td key={index}>
                  <Input
                    value={value}
                    onChange={e => handleInputChange(row.id, index, e.target.value)}
                    isReadOnly={row.name === 'Total'} // Make the "Total" row read-only
                  />
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* <Button mt={4} colorScheme="blue" onClick={handleButtonClick}>
        Send Payload
      </Button> */}
    </Box>
    
  );
};

export default Finances;
