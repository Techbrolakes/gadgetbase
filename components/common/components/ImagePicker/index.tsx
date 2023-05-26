import React, { useEffect, useState } from 'react';
import { Button, FormErrorMessage } from '@chakra-ui/react';
import GbImage from '../GbImage';
import logger from '@/logger';
import cloudinary from '@/config/services/cloudinary';

interface IProps {
    onImageSelected: (file: File, secureUrl: string | undefined) => void;
    help?: React.ReactNode;
}

const ImagePicker: React.FC<IProps> = ({ onImageSelected, help }) => {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [secureUrl, setSecureUrl] = useState<any>('');
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageChange = async ({ target }: { target: any }) => {
        const [file] = target.files;
        setSelectedImage(file);
    };

    useEffect(() => {
        const uploadImage = async () => {
            if (selectedImage) {
                try {
                    setLoading(true);
                    const response = await cloudinary.uploadMedia(selectedImage);
                    setSecureUrl(response?.secure_url);
                    onImageSelected(selectedImage, response?.secure_url);
                    setImageLoaded(true);
                    setLoading(false);
                } catch (error) {
                    logger(error);
                    setLoading(false);
                } finally {
                    setLoading(false);
                    setImageLoaded(false);
                }
            }
        };

        if (!secureUrl) {
            uploadImage();
        }
    }, [selectedImage, onImageSelected, secureUrl]);

    const handleImageReset = () => {
        setSelectedImage(null);
        setSecureUrl('');
    };

    return (
        <div className="space-y-4 cursor-pointer" onClick={handleImageReset}>
            {help && <FormErrorMessage>{help}</FormErrorMessage>}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="image-upload"
            />
            <label htmlFor="image-upload">
                <Button
                    as="span"
                    size="md"
                    borderRadius={'none'}
                    colorScheme="blue"
                    isLoading={loading}
                    loadingText="Uploding........."
                    background={'blue.600'}
                >
                    {secureUrl ? 'Change Product Image' : 'Upload Product Image'}
                </Button>
            </label>
            {secureUrl && selectedImage && <GbImage src={secureUrl} alt="Selected" width={150} height={100} />}
        </div>
    );
};

export default ImagePicker;
