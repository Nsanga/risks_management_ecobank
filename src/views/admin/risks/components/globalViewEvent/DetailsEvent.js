import { Flex, Input, Text, Textarea, Box, Checkbox, Grid, GridItem, Button } from '@chakra-ui/react';
import Select from 'react-select';
import { FaFilePdf, FaFileWord, FaFileAlt, FaFileImage } from 'react-icons/fa';
import React from 'react';

const DetailsEvent = (
    {
        detailsData
    }
) => {

    return (
        <Box>
            <Flex flexDirection='column' gap={4}>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={6} alignItems="center">
                        <Text fontSize={14}>Event Date:</Text>
                        <Box width={200}>
                            <Text color='blue' fontSize={14}>{detailsData.eventDate}</Text>
                        </Box>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>RAG:</Text>
                        <Box width={200}>
                            <Text color='blue' fontSize={14}>{detailsData.RAG.label}</Text>
                        </Box>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm' isChecked={detailsData.activeEvent} readOnly>Active Event</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>Event Time:</Text>
                        <Box width={200}>
                            <Text color='blue' fontSize={14}>{detailsData.eventTime}</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>Recorded by:</Text>
                        <Text color='blue' fontSize={14}>Georges MOUMPOU</Text>
                    </Flex>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>On:</Text>
                        <Text color='blue' fontSize={14}>30/03/2023</Text>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm' isChecked={detailsData.excludeFundLosses} readOnly>Exclude Fund Losses</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems="center">
                    <Checkbox size='sm' isChecked={detailsData.externalEvent} readOnly>External Event</Checkbox>
                    <Flex gap={5} alignItems="center">
                        <Text fontSize={14}>External Ref:</Text>
                        <Box >
                            <Text color='blue' fontSize={14}>{detailsData.externalRef}</Text>
                        </Box>
                    </Flex>
                    <Flex width={155}>
                        <Checkbox size='sm' isChecked={detailsData.notify} readOnly>Notify</Checkbox>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Box p={5} shadow='md' borderWidth='1px' width='49%'>
                        <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                            Area of Detection
                        </Box>
                        <Flex flexDirection='column' gap={4}>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Entity:</Text>
                                <Box width={200}>
                                    <Text color='blue' fontSize={14}>{detailsData.entityAreaOfDetection.label}</Text>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Sub Entity:</Text>
                                <Box width={200}>
                                    <Text color='blue' fontSize={14}>{detailsData.subEntityAreaOfDetection.label}</Text>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Detection Date:</Text>
                                <Box width={200}>
                                    <Text color='blue' fontSize={14}>{detailsData.detectionDate}</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box p={5} shadow='md' borderWidth='1px' width='49%'>
                        <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                            Area of Origin
                        </Box>
                        <Flex flexDirection='column' gap={4}>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Entity:</Text>
                                <Box width={200}>
                                    <Text color='blue' fontSize={14}>{detailsData.entityAreaOfOrigin}</Text>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems="center">
                                <Text fontSize={14}>Sub Entity:</Text>
                                <Box width={200}>
                                    <Text color='blue' fontSize={14}>{detailsData.subEntityAreaOfOrigin}</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Box pt={5} pb={5}>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Description
                    </Box>
                    <Text color='blue' fontSize={14}>{detailsData.description}</Text>
                </Box>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Box bg='green.400' color='#FFF' mb={6} padding={2}>
                        Detailed Description
                    </Box>
                    <Text color='blue' fontSize={14}>{detailsData.descriptionDetailled}</Text>
                </Box>
                <Flex justifyContent='space-between' pt={5}>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={12} alignItems="center">
                            <Text fontSize={14}>Approved Date:</Text>
                            <Box width={200} marginLeft={1}>
                                <Text color='blue' fontSize={14}>{detailsData.approvedDate}</Text>
                            </Box>
                        </Flex>
                        <Flex gap={14} alignItems="center">
                            <Text fontSize={14}>Closed Date:</Text>
                            <Box width={200} marginLeft={3}>
                                <Text color='blue' fontSize={14}>{detailsData.closedDate}</Text>
                            </Box>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Text fontSize={14}>Target Closure Date:</Text>
                            <Box width={200}>
                                <Text color='blue' fontSize={14}>{detailsData.targetClosureDate}</Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex flexDirection='column' gap={2}>
                        <Flex gap={14} alignItems="center">
                            <Text fontSize={14}>Owner:</Text>
                            <Box width={200} marginLeft={1}>
                                <Text color='blue' fontSize={14}>{detailsData.owner.label}</Text>
                            </Box>
                        </Flex>
                        <Flex gap={10} alignItems="center">
                            <Text fontSize={14}>Nominee:</Text>
                            <Box width={200} marginLeft={1}>
                                <Text color='blue' fontSize={14}>{detailsData.nominee.label}</Text>
                            </Box>
                        </Flex>
                        <Flex gap={10} alignItems="center">
                            <Text fontSize={14}>Reviewer:</Text>
                            <Box width={200} marginLeft={1}>
                                <Text color='blue' fontSize={14}>{detailsData.reviewer}</Text>
                            </Box>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Text fontSize={14}>Review Date:</Text>
                            <Box width={200}>
                                <Text color='blue' fontSize={14}>{detailsData.reviewerDate}</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Box mt={8}>
                <GridItem colSpan={1}>
                    <Text fontWeight="bold" fontSize={14}>Document(s) importée(s) :</Text>
                </GridItem>
                <Box mt={4}>
                    <Flex justifyContent='center' gap={2}>{detailsData.documents}</Flex>
                </Box>
            </Box>
        </Box>
    );
}

export default DetailsEvent;
