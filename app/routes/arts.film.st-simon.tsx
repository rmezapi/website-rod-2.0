import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const FILM_ST_SIMON_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vToLkbZRozOqy0MeQ9us3oPLWSi6FQEz2p9SfmKs-6fuXTotxM0u-NvyNzkFQwc0Pzeb_f8iSyCFdZo/pub?gid=0&single=true&output=csv'

const FilmStSimonIndexPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(FILM_ST_SIMON_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">a trip to st. simon's island, georgia
            </h1>
            <h3 className="text-center text-lg text-italic text-gray-500">April 2024</h3>
            <br/> 
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default FilmStSimonIndexPage;
