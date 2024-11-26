import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const FILM_BOULDERING_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRlom03bx-mTW6ct4vFIJnfRDiRbtLlDSmSMj156dAexJuufNkIEzGy228t-bCHonbYbtGbGrrmqYY4/pub?gid=0&single=true&output=csv'

const FilmBoulderingPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(FILM_BOULDERING_SHEET_URL);
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
            <h1 className="text-center text-2xl font-bold mt-4">come with me! - bouldering</h1>
            <h3 className="text-center text-lg text-italic text-gray-500">2023 </h3>
            
            <div className="text-center text-md w-[80%] mx-auto gap-4">
                <p>
                    Nature is, has been, and will always be the main stage for sport. Its magnificent features are like no other, providing the ultimate challenge for athletes to tackle. Its natural complexities continue to push engineers to design the right tools for athletes to perform in the most breathtaking of sites. From mountains to sea, valleys to rivers, tundra to jungle, there is always a sport to be practiced, and a sight to behold.
                </p> <br />
                <p>
                    In this collection of photographs I take on the life-long dream of mine of exploring nature and attempting the sports practiced in such sceneries. With me, I bring a small LOMO LC-A film camera, the tools required, friends, and a desire to capture my experience through a set of photographs. I focus on capturing the nature around us, the fun there is to be had, and the incredible sites that allow us to experience the sport.
                </p> <br />
                <p>
                    Bouldering, an outdoor form of climbing that centers on climbing boulders without any safety systems other than a crash pad. Bouldering is a team sport. A sport created and maintained by the climbing community itself, as climbers rate and share the boulders they climb and the routes they find with the community to compile a book. A book that allows members of the community to find and experience their first ascent on such routes as well. The goal is not to climb atop the boulder, but to use or find the most creative way to do so. A single boulder can be home to dozens of routes. Some routes are easy, others are yet to be topped. It is all about body control, technique, some strength, but most importantly will, perseverance, and a support system that makes you feel comfortable while you push past your fears and known limits. It is about community, about sharing an experience with friends, about exploring and enjoying the nature around you, but mostly, about allowing your inner child to say -- “I can climb that!”
                </p> <br />
            </div>
            <ImageGallery images={images} /> <br />
        </div>
    );
};

export default FilmBoulderingPage;