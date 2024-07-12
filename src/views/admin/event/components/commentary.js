import { Box, Textarea } from '@chakra-ui/react'
import React from 'react'

const Commentary = () => {
    return (
        <Box p={5} shadow='md' borderWidth='1px'>
            <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                Commentary
            </Box>
            <Textarea />
        </Box>
    )
}

export default Commentary
