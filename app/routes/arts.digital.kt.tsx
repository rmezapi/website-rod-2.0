import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const KT_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJAmCrHEDT6MyV__0ulK2SrITIBVAnd1FxRBrpUn5OrpX13FAPJCFyT6EKCMbOco83eNBCki4vacnj/pub?gid=0&single=true&output=csv'

const DigitalKtPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(KT_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">kt.</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2023</h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                    Put simply, 'kt' is a collection of portraits of Katie. In this collection of photographs, I hope to capture kt’s beauty, talent, passion, joy, and some of the little things that remind me of kt. She is one full of surprises and so much love to give. A talented ballerina with an immense passion for dance. A friend, companion and jokester. This collection is just a glimpse of kt, as capturing it all deemed too impossible a task.
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default DigitalKtPage;
