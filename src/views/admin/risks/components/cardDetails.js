import { Box, Flex, Text, Textarea } from '@chakra-ui/react';
import React from 'react'

const CardDetails = () => {
  return (
    <Box p={5} shadow='md' borderRadius={15} borderWidth='1px' mt={4}>
      <Flex direction="row" gap={4} flex="2" alignItems='center'>
        <Text fontWeight="bold">Restitution des fonds suite à une fraude par les transactions</Text>
        <Box p={1} shadow='md' borderWidth='1px' borderColor='blue'>
          <Text  style={{color: 'blue'}}>Approved</Text>
        </Box>
      </Flex>
      <Flex mt={2} direction="row" gap={4} flex="2">
        <Text>Recorded By: Georges MOUMPOU</Text>
        <Text>Event date: 30/03/2023</Text>
      </Flex>
    </Box>
  );
}

export default CardDetails;