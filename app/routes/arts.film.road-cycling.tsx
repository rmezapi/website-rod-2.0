import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const FILM_ROAD_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQh8BqZp3IJcwTyEttw0FOCAouCpm43nE-hmC7UcZay7nMfCVfndG96YHvBfDJ0gB1HynwN-IU2GpSS/pub?gid=0&single=true&output=csv';

const FilmRoadCyclingPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(FILM_ROAD_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">come with me! - road cycling</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2023 - Present</h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                    Nature is, has been, and will always be the main stage for sport. Its magnificent features are like no other, providing the ultimate challenge for athletes to tackle. Its natural complexities continue to push engineers to design the right tools for athletes to perform in the most breathtaking of sites. From mountains to sea, valleys to rivers, tundra to jungle, there is always a sport to be practiced, and a sight to behold.
                </p> <br />
                <p>
                    In this collection of photographs I take on the life-long dream of mine of exploring nature and attempting the sports practiced in such sceneries. With me, I bring a small LOMO LC-A film camera, the tools required, friends, and a desire to capture my experience through a set of photographs. I focus on capturing the nature around us, the fun there is to be had, and the incredible sites that allow us to experience the sport.
                </p> <br />
                <p>
                    Road cycling is fast. A team sport, where by riding behind the wheel of a teammate, you save around 30% of energy due to aerodynamics and a decrease in drag. This phenomenon creates a group of tightly packed cyclists, working together and rotating pulls at the front of the peloton. A group of now friends communicating potholes, when braking is happening, cars on your left, and anything the others need to know to keep everyone from crashing. It is a sport of trust, about predictability, as we all know that if one of us goes down, we are going down with them. Riding fast is easy near the back of the peloton, it is also the most dangerous section of the peloton. It is where all you can see is your teammates butt, their rear wheel, and the landscapes and teammates to your sides. It is a scary place to be in, but trust me when I say you'll probably want to be near the back when the burn starts to take over your legs, or your heart rate skyrockets. Cycling brings you to a close knit community, where if you get dropped from the peloton, someone will likely drop back with you. It is all worth it. The friends made, the conversations shared, the adrenaline rush, the shared workload, and so much more makes cycling in a group an addicting experience.
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default FilmRoadCyclingPage;
