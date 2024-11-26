import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const THE_TOWN_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDPy0d0p2-PvR1Pu2RCfEAS3tt_fMr8iJLQOS74pvB6k2VSukyD67afz7dNVrmbNmmgBhrlvx-DLaV/pub?gid=0&single=true&output=csv'

const DigitalInConversationPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(THE_TOWN_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">the town: in conversation with daniel shea            </h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2023 </h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                The Town is a collection of images taken in the Town of Chapel Hill, a small town I have come to know and love. Inspired by the work and ideas of Daniel Shea, I explore everything from construction to animals in only 10 photographs in both black and white and color images. The idea for this project came when reading one of Daniel's interviews on Frieze on one of his collections about New York City. In it, there is a lot of black and white, as well as hints of pastel colors in images, and sometimes even repetitively stamping a subject onto the image. Daniel is clearly in love with the city, like a portrait photographer with its muse.
                </p> <br />
                <p>
                The Town of Chapel Hill has been my home for 3 years now. I wanted to show a few things that often go unnoticed, like the coal plant or a small bunny. I also wanted to portray the things that we do notice, like the endless construction and remodeling of countless buildings and roads. The images include various different aspects of Chapel Hill, but definitely not all of them. Daniel finds there is something beautiful in a vast, big city like New York, however, I find that a similar beauty can be found in a small town, especially Chapel Hill. I hope you enjoy looking at them as much as I enjoyed making them.                
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default DigitalInConversationPage;
