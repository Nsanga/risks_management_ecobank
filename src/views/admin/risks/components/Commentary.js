import { Box, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react'

const Commentary = () => {
  return (
    <Box p={5} shadow='md' borderWidth='1px'>
            <Flex direction="column" gap={4} flex="2">
                <Text fontWeight="bold">Commentary</Text>
                <Textarea />
            </Flex>
    </Box>
  );
}

export default Commentary;
