import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const CardDetails = ({ isApproved }) => {
  const description = "Restitution des fonds suite à une fraude par les transactions en ligne sur le compte d'un client du Commercial Bank.";
  const truncatedDescription = truncateText(description, 90); // Truncate to 50 characters

  return (
    <Flex direction="column" p={5} shadow="md" borderRadius={15} borderWidth="1px" mt={4}>
      <Flex direction="row"justifyContent="space-between">
        <Flex direction="row" alignItems="center">
          <Text fontWeight="bold" mr={10} style={{ color: 'blue'}} fontSize={14}>EVT17010</Text>
          <Text fontWeight="bold" mr={10} fontSize={14}>{truncatedDescription}</Text>
        </Flex>
        <Box p={1} shadow='md' borderWidth='1px' borderColor='blue'>
          <Text style={{ color: 'blue' }} fontSize={14}>Approved</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardDetails;
