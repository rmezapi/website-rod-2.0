import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const FILM_MTB_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4QLZkjtoi_8q5TqPr28IStOq48gLrgWHuV2vRaITloD9oBQcA_Av_66VJsakaA8Z9iUvrzRqCV435/pub?gid=0&single=true&output=csv'

const FilmMtbPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(FILM_MTB_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">come with me! - mountain biking</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2023 </h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                    Nature is, has been, and will always be the main stage for sport. Its magnificent features are like no other, providing the ultimate challenge for athletes to tackle. Its natural complexities continue to push engineers to design the right tools for athletes to perform in the most breathtaking of sites. From mountains to sea, valleys to rivers, tundra to jungle, there is always a sport to be practiced, and a sight to behold.
                </p> <br />
                <p>
                    In this collection of photographs I take on the life-long dream of mine of exploring nature and attempting the sports practiced in such sceneries. With me, I bring a small LOMO LC-A film camera, the tools required, friends, and a desire to capture my experience through a set of photographs. I focus on capturing the nature around us, the fun there is to be had, and the incredible sites that allow us to experience the sport.
                </p> <br />
                <p>
                    Mountain biking is scary. Moreso, it is easily one of the most physical sports I have ever done. All you need is a mountain bike and a helmet, though I definitely recommend bringing water, a camera, and a multi-tool in case of any mechanical issues with the bike. Riding through the Carolina North Forest single track trails is like a roller coaster, only you are in charge of avoiding trees, rocks, and roots. You generate all the power, you choose the safest (or fastest) line, and go. It comes so fast, there is no room for doubt. Once you doubt, you are putting yourself at risk of falling, as for mountain bikers going slow equals a higher chance of falling. It is like road biking in the way you want to go fast, and like bouldering in the sense that makes you think -- “I can do that!” It is a rush of adrenaline the entire time, and for some, like me, there is nothing better.
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default FilmMtbPage;
