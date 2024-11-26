import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const FILM_SF_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRESf2sZQjR2jGpfKhzdKlBfOxU3l64pKyC81FHaWPc9dUIgCuBXQ67qCVDP7nGz7qL_9q8L9ldYj94/pub?gid=0&single=true&output=csv'

const FilmSfPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(FILM_SF_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">san francisco</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">sometimes</h3>
            
            <br />
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default FilmSfPage;