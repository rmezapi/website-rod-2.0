import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const GRAD_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTymNQc2Yr9GYxMaEie6uHWG6NnFhEvTlcV42iq2rRZbLHrupmyMMgLoXGhsY2YzVGDYTC1Ue2cRMsg/pub?gid=0&single=true&output=csv'

const DigitalGraduationPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(GRAD_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">graduation</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2022-2024 </h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                These are just some of my favorite photos I have taken during the various graduation photoshoots I have been a part of.
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default DigitalGraduationPage;
