import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const FILM_BW_CLIMBING_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0zH6RKPVw1MtMbQpZsTFeo0LG4XiVgZ2IF3REA0eRW2QdtGyX5vCgaD70Wilnjk5jpJHSV-8-zrXX/pub?gid=0&single=true&output=csv'

const FilmBWClimbingPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(FILM_BW_CLIMBING_SHEET_URL);
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
        <div>
            <h1 className="text-center text-2xl font-bold mt-4">climbing adventures in black and white</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">always</h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                This collection consists of the black and white film images I take during the many misc. climbing adventures I go on with my friends
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default FilmBWClimbingPage;
