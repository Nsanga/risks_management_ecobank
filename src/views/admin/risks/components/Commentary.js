import { Box, Button, Flex, GridItem, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react'

const Commentary = () => {
  return (
    <Box>
      <Flex direction="column" gap={4} flex="2">
        <Text fontWeight="bold">Commentary</Text>
        <Textarea />
      </Flex>
    </Box>
  );
}

export default Commentary;
