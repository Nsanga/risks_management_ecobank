import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Input, Box, Flex, Select, Text } from '@chakra-ui/react';

const Finances = ({ onFinancesChange = () => {} }) => {
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
  const [totalCurrencies, setTotalCurrencies] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

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

  const handleCurrencyChange = (e) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
    setTotalCurrencies(prev => `${prev.split(' ')[0]} ${currency}`);
  };

  return (
    <Box>
      <Flex justifyContent="space-between" mb={4}>
        <Box flex="1" mr={2}>
          <Text fontSize={14}>Total Currencies :</Text>
          <Input
            placeholder="Total Currencies"
            value={totalCurrencies}
            onChange={(e) => setTotalCurrencies(e.target.value)}
            type="text"
            size="sm"
          />
        </Box>
        <Box flex="1" ml={2}>
          <Text fontSize={14}>Currencies :</Text>
          <Select
            placeholder="Select currency"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            size="sm"
          >
            <option value="USD">USD</option>
            <option value="XAF">XAF</option>
            <option value="EUR">EUR</option>
          </Select>
        </Box>
      </Flex>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th textAlign="start" fontSize="sm"></Th>
            <Th textAlign="start" fontSize="sm">Total</Th>
            <Th textAlign="start" fontSize="sm">Direct</Th>
            <Th textAlign="start" fontSize="sm">Regulatory fines</Th>
            <Th textAlign="start" fontSize="sm">Asset write-down</Th>
            <Th textAlign="start" fontSize="sm">Other</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map(row => (
            <Tr key={row.id}>
              <Td fontSize="sm" width='15%'>{row.name}</Td>
              {row.values.map((value, index) => (
                <Td key={index}>
                  <Input
                    value={value}
                    onChange={e => handleInputChange(row.id, index, e.target.value)}
                    isReadOnly={row.name === 'Total'} // Make the "Total" row read-only
                    size="sm"
                    width="7px"
                  />
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Finances;
