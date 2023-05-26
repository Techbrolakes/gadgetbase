import logger from '@logger';
import axios from 'axios';

interface IMedia {
    secure_url: string;
}

const uploadMedia = async (file: string | Blob) => {
    const payload = new FormData();
    payload.append('file', file);
    payload.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || '');

    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_CLOUDINARY_URL || '', payload);
        return response.data as IMedia;
    } catch (error) {
        logger(error);
    }
};

const cloudinary = {
    uploadMedia,
};

export default cloudinary;
