import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const CardDetails = ({ eventRef, description, isApproved }) => {
  return (
    <Box p={5} shadow="md" borderRadius={15} borderWidth="1px" mt={4}>
      <Flex direction="row" alignItems="center" justifyContent="space-between" mb={4}>
        <Flex direction="row" alignItems="center">
          <Text fontWeight="bold" mr={2}>Event Ref:</Text>
          <Text mr={10}>{eventRef}</Text> {/* Increased the margin-right value here */}
          <Text fontWeight="bold" mr={2}>Description:</Text>
          <Text>{description}</Text>
        </Flex>
        <Text color={isApproved ? "green.500" : "red.500"}>
          {isApproved ? "Approved" : "Unapproved"}
        </Text>
      </Flex>
    </Box>
  );
};

export default CardDetails;
