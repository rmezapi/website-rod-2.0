import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const YVTP_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnKye1KJwspU_bbE6FH2YuSF7LQYJKxbpViDfTxT0XYEiyK_mi6dWjxfLYNiZcwHkHlx7DJCOmBMm2/pub?gid=0&single=true&output=csv'

const DigitalYosemitePage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(YVTP_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">yosemite valley theme park</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2022 </h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                    This is a collection of images I took when visiting Yosemite in the summer of 2022. Not only did I witness some of the most beautiful sights I will ever see, I also witnessed a park that resembles more a theme park than a national park. Taken aback by the amount of people, trash, cars, and more, I decided to put together this collection of images that capture that 'theme park' feel about the Yosemite Valley.
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default DigitalYosemitePage;