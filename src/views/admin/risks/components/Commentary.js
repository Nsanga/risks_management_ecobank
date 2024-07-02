import { Box, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react'

const Commentary = () => {
  return (
    <Box border="1px solid #ccc" borderRadius="md" p={6}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>Commentaire</Text>
      <Flex direction="column" gap={4}>
        <Flex alignItems="center" gap={2}>
          <Text>Laisser un commentaire:</Text>
          <Input type="text" flex="5" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Commentary;
