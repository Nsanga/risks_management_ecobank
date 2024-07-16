import React, { useState } from 'react';
import Details from './Details';
import Review from './Review';
import { Button, Box } from '@chakra-ui/react';

const ParentComponent = () => {
    const [details, setDetails] = useState({
        eventDate: '',
        rag: '',
        activeEvent: false,
        eventTime: '',
        externalEvent: false,
        externalRef: '',
        notify: false,
        detectionEntity: '',
        detectionSubEntity: '',
        detectionDate: '',
        originEntity: '',
        originSubEntity: '',
        description: '',
        detailedDescription: '',
        approvedDate: '',
        closedDate: '',
        targetClosureDate: '',
        owner: '',
        nominee: '',
        reviewer: '',
        reviewDate: ''
    });
    
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showReview, setShowReview] = useState(false);

    const handleDetailsChange = (updatedDetails) => {
        setDetails(updatedDetails);
    };

    const handleFilesChange = (files) => {
        setUploadedFiles(files);
    };

    const handleReviewToggle = () => {
        setShowReview(!showReview);
    };

    return (
        <Box p={5}>
            {!showReview ? (
                <>
                    <Details 
                        details={details} 
                        setDetails={handleDetailsChange} 
                        uploadedFiles={uploadedFiles}
                        setUploadedFiles={handleFilesChange}
                    />
                    <Button mt={5} onClick={handleReviewToggle}>
                        Review
                    </Button>
                </>
            ) : (
                <>
                    <Review details={details} uploadedFiles={uploadedFiles} />
                    <Button mt={5} onClick={handleReviewToggle}>
                        Edit Details
                    </Button>
                </>
            )}
        </Box>
    );
};

export default ParentComponent;
