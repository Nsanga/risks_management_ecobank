import { Box, Flex, Text, Textarea } from '@chakra-ui/react';
import React from 'react'

const CardDetails = () => {
  return (
    <Box p={5} shadow='md' borderRadius={15} borderWidth='1px' mt={4}>
      <Flex direction="row" gap={4} flex="2" alignItems='center'>
        <Text fontWeight="bold">Event name</Text>
        <Box p={1} shadow='md' borderWidth='1px' borderColor='blue'>
          <Text fontWeight="bold">Approved</Text>
        </Box>
      </Flex>
      <Flex mt={2} direction="row" gap={4} flex="2">
        <Text fontWeight="bold">Recorded By:</Text>
        <Text fontWeight="bold">Event date:</Text>
        <Text fontWeight="bold">Recorded By</Text>
      </Flex>
    </Box>
  );
}

export default CardDetails;