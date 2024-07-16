import { Spinner, IconButton, Box, AlertIcon, AlertTitle, AlertDescription, Alert } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FiImage, FiVideo } from 'react-icons/fi'; // Importer les icônes de react-icons
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { url } from 'urlLoader';
import { FaFile, FaFileVideo, FaUpload } from 'react-icons/fa';

const DocumentUploader = ({ onMediaUpload }) => {
    const [mediaData, setMediaData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setError(null);
        acceptedFiles.forEach(file => {
            if (file.size > 20 * 1024 * 1024) {
                setError('La taille du fichier dépasse la limite de 20 Mo.');
                return;
            }

            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                const binaryStr = reader.result;
                setMediaData(prevState => [...prevState, { dataURL: binaryStr, file }]);
                uploadToCloudinary(file);
            };
            reader.readAsDataURL(file);
        });
    }, []);

    const uploadToCloudinary = async (file) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset');
        try {
            const response = await fetch(`${url}/api/v1/upload/file?fileName=${file.name}_admin`, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            console.log('Cloudinary upload response:', data);
            onMediaUpload(data.data.downloadLink);
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRemoveMedia = (file) => {
        setMediaData(prevState => prevState.filter(media => media.file !== file));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxSize: 20 * 1024 * 1024,
        multiple: true
    });

    return (
        <div {...getRootProps()} style={{ display: 'flex', flexDirection: 'row', border: '2px dashed #ccc', padding: '20px', justifyContent: 'center' }}>
            <input {...getInputProps()} />

            {mediaData.length > 0 && (
                <Box mt={4} display="flex" justifyContent='center' alignItems="center" mr={2}>
                    {mediaData.map((media, index) => (
                        <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                            {media.file.type.startsWith('image') ? (
                                <img src={media.dataURL} alt="Media Preview" style={{ maxWidth: '50%', maxHeight: '100px' }} />
                            ) : media.file.type.startsWith('video') ? (
                                <Box display="flex" flexDirection='column' justifyContent='center' alignItems="center">
                                    <FaFileVideo size={50} style={{ marginRight: '10px' }} />
                                    <Box>{media.file.name}</Box>
                                </Box>
                            ) : (
                                <Box display="flex" flexDirection='column' justifyContent='center' alignItems="center">
                                    <FaFile size={50} style={{ marginRight: '10px' }} />
                                    <Box>{media.file.name}</Box>
                                </Box>
                            )}
                            <IconButton
                                icon={<CloseIcon />}
                                aria-label="Supprimer l'image"
                                onClick={() => handleRemoveMedia(media.file)}
                                variant="ghost"
                                size="sm"
                                colorScheme="red"
                            />
                        </Box>
                    ))}
                </Box>
            )}
            <div style={{ cursor: 'pointer' }}><FaUpload size='70px' /></div>
            {isLoading && <Spinner color='blue.500' size='sm' />}
            {error && (
                <Alert status="error" mt={4}>
                    <AlertIcon />
                    <AlertTitle mr={2}>Erreur de téléchargement!</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
        </div>
    );
};

export default DocumentUploader;
