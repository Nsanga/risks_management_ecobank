import { Box, Flex, Input, Text, Select } from '@chakra-ui/react';
import React from 'react';

const Finances = () => {
  return (
    <Box border="1px transparent" borderRadius="md" p={6}>
      <Flex alignItems="center" justify="space-between" gap={2}>
        <Flex align="center">
          <Text>Head office currency:</Text>
          <Select>
            <option value="USD">USD</option>
            <option value="XAF">XAF</option>
            <option value="EUR">EUR</option>
            <option value="YEN">YEN</option>
          </Select>
        </Flex>
        <Flex align="center">
          <Text>Total currencies:</Text>
          <Select>
            <option value="USD">USD</option>
            <option value="XAF">XAF</option>
            <option value="EUR">EUR</option>
            <option value="YEN">YEN</option>
          </Select>
        </Flex>
      </Flex>
      <Flex direction="column" gap={4} mt={4}>
        <Flex
          bg="lightblue"
          borderRadius="md"
          p={4}
          justify="space-between"
        >
          <Box flex="1">
            <Text fontWeight="bold">Name</Text>
          </Box>
          <Box flex="1">
            <Text fontWeight="bold">Total</Text>
          </Box>
          <Box flex="1">
            <Text fontWeight="bold">Direct</Text>
          </Box>
          <Box flex="1">
            <Text fontWeight="bold">Registration Fees</Text>
          </Box>
        </Flex>
        <Flex direction="column" gap={2}>
          <Flex
            bg="lightblue"
            borderRadius="md"
            p={2}
            justify="space-between"
          >
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
          </Flex>
          <Flex
            bg="lightblue"
            borderRadius="md"
            p={2}
            justify="space-between"
          >
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
          </Flex>
          <Flex
            bg="lightblue"
            borderRadius="md"
            p={2}
            justify="space-between"
          >
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
          </Flex>
          <Flex
            bg="lightblue"
            borderRadius="md"
            p={2}
            justify="space-between"
          >
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
          </Flex>
          <Flex
            bg="lightblue"
            borderRadius="md"
            p={2}
            justify="space-between"
          >
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
          </Flex>
          <Flex
            bg="lightblue"
            borderRadius="md"
            p={2}
            justify="space-between"
          >
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
            <Box flex="1"><Input type="text" /></Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Finances;
