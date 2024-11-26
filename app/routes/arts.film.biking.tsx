import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const FILM_BIKING_ADV_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDmDrSln6a1a8JP9QFa8XYqKtZJvw98EGrv8sGWn03FUU8jY9V3c4VfQywF1evjKbDKFhM7X0QymrX/pub?gid=0&single=true&output=csv'

const FilmBikingPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(FILM_BIKING_ADV_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">biking adventures</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">always</h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                This collection consists of images I take during the many misc. biking adventures I go on with my friends and family.
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default FilmBikingPage;
