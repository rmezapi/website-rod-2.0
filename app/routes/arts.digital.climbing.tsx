import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const DIGITAL_CLIMBING_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS30uq14M4zoSvChXaaYimMW9U-XdXj87uX_0H1xKOqrAZEshEZZs0MLB7IsUzOsX_HB1oDS_RT1zqZ/pub?gid=0&single=true&output=csv'

const DigitalClimbingPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(DIGITAL_CLIMBING_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">climbing adventures</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">always </h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                    This collection consists of images I take during the many misc. climbing adventures I go on with my friends.
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default DigitalClimbingPage;