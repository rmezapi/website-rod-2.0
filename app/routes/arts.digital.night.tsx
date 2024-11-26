import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const NIGHT_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQvUaFqr5CKGqP_kD0V1UqYoWrqCMjw-Dv01M1r7PvYzu2pjnKFmsPFofWVIFb7iGgXQQSxO-IVibl/pub?gid=0&single=true&output=csv'

const DigitalNightPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(NIGHT_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">3 friends, a bike, lights, and a kimono</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2023</h3>
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                '3 friends, a bike, lights and a kimono' is a series of photographs that depict the outcome of giving 3 friends, a bike, lights, a kimono, and a camera. The photographs all use long exposure to create 'cool' lighting patterns with LED lights mounted on the rear wheel of a bike. As we experimented more and more with the lights on the bike wheel, numerous ideas came to us. These are just some of the ideas we had, but I believe they show the vast range in the variety of different photographs that can be taken when you give 3 friends, a bike, lights and a kimono.                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default DigitalNightPage;
