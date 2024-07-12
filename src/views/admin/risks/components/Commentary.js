import { Box, Button, Flex, GridItem, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react'

const Commentary = () => {
  return (
    <Box p={5} shadow='md' borderWidth='1px'>
      <Flex direction="column" gap={4} flex="2">
        <Text fontWeight="bold">Commentary</Text>
        <Textarea />
      </Flex>
      <GridItem colSpan={6}>
        <Flex justifyContent="center" mt={4}>
          <Button colorScheme="green" mr={2}>Save And Approve</Button>
          <Button colorScheme="blue" mr={2}>Save</Button>
          <Button colorScheme="red" mr={2}>Cancel</Button>
        </Flex>
      </GridItem>
    </Box>
  );
}

export default Commentary;
