import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const SCUBA_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJTPR28ZkKCQkAvch5ORh2aB8p7nsgTGlVvWaRAMC6Sl2IoaaFkdxPzoAr2Nq2UmhtHZ9g3bgMbzmb/pub?gid=0&single=true&output=csv'

const DigitalScubaPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(SCUBA_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">a scuba diving trip in the florida keys</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2023</h3>
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                These are some of the digital images I took on a scuba diving trip with my family in Isla Morada, FL. The underwater images were taken with a GoPro camera.
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default DigitalScubaPage;
