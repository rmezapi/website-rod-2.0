import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const FRIENDS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vST5hnMVFwjzmU7DToFWq8GnD85wCcOi4mxOXBpe_KZEl7Tr-hb_lmU66E-Z50PWCxn4KX8DLS932t1/pub?gid=0&single=true&output=csv'

const DigitalFriendsPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(FRIENDS_SHEET_URL);
                const csvData = await response.text();
                const imageUrls = csvData.split('\n').map(line => line.trim()).filter(line => line);
                setImages(imageUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="h-screen">
            <h1 className="text-center text-2xl font-bold mt-4">friends.</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">always</h3>
            <br />  
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default DigitalFriendsPage;
