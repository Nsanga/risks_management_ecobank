// ProfileDetails.js
import React from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage, SimpleGrid, Heading, Box, Select, Checkbox } from '@chakra-ui/react';

const ProfileDetails = ({ formData, handleInputChange, errors }) => {
    return (
        <Box flex="1" p={6} shadow="lg" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={6}>
                User Information
            </Heading>
            <SimpleGrid columns={2} spacing={4}>
                <FormControl isInvalid={errors.userId}>
                    <FormLabel>User ID</FormLabel>
                    <Input
                        type="number"
                        name="userId"
                        value={formData.userId}
                        onChange={handleInputChange}
                    />
                    {errors.userId && <FormErrorMessage>{errors.userId}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                </FormControl>
                <FormControl>
                    <FormLabel>Surname</FormLabel>
                    <Input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Date of Birth</FormLabel>
                    <Input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Job Title</FormLabel>
                    <Input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Telephone</FormLabel>
                    <Input
                        type="number"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl isInvalid={errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                </FormControl>
                <FormControl>
                    <FormLabel>User Group</FormLabel>
                    <Select
                        name="userGroup"
                        value={formData.userGroup}
                        onChange={handleInputChange}
                    >
                        {/* Options go here */}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Language</FormLabel>
                    <Input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>CC Email To</FormLabel>
                    <Select
                        name="ccEmailTo"
                        value={formData.ccEmailTo}
                        onChange={handleInputChange}
                    >
                        {/* Options go here */}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Nominee</FormLabel>
                    <Select
                        name="nominee"
                        value={formData.nominee}
                        onChange={handleInputChange}
                    >
                        {/* Options go here */}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Password Expiry Date</FormLabel>
                    <Input
                        type="date"
                        name="passwordExpiryDate"
                        value={formData.passwordExpiryDate}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Locked Out Reason</FormLabel>
                    <Input
                        type="text"
                        name="lockedOutReason"
                        value={formData.lockedOutReason}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl display="flex" alignItems="center">
                    <FormLabel mb="0">Administrator</FormLabel>
                    <Checkbox
                        name="administrator"
                        isChecked={formData.administrator}
                        onChange={(e) => handleInputChange({ target: { name: 'administrator', value: e.target.checked } })}
                    >

                    </Checkbox>
                </FormControl>
                <FormControl display="flex" alignItems="center">
                    <FormLabel mb="0">Can Authorise</FormLabel>
                    <Checkbox
                        name="canAuthorise"
                        isChecked={formData.canAuthorise}
                        onChange={(e) => handleInputChange({ target: { name: 'canAuthorise', value: e.target.checked } })}
                    >
                
                    </Checkbox>
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default ProfileDetails;
