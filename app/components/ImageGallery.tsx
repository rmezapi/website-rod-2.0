import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (currentIndex !== null) {
                switch (event.key) {
                    case 'Escape':
                        closeLightbox();
                        break;
                    case 'ArrowRight':
                    case ' ':
                        goToNext();
                        break;
                    case 'ArrowLeft':
                        goToPrevious();
                        break;
                    default:
                        break;
                }
            }
        };

        if (currentIndex !== null) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex]);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setCurrentIndex(null);
    };

    const goToPrevious = () => {
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        }
    };

    const goToNext = () => {
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex + 1) % images.length);
        }
    };

    return (
        <div className="image-gallery" style={{
            width: '80%',
            margin: '0 auto',
            '@media (max-width: 600px)': {
                width: '90%',
            }
        }}>
            <div className="thumbnails" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '10px',
                '@media (max-width: 600px)': {
                    gridTemplateColumns: 'repeat(1, 1fr)',
                }
            }}>
                {images.map((image, index) => (
                    <img
                        key={`${index}-${image}`}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => openLightbox(index)}
                        onKeyUp={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                openLightbox(index);
                            }
                        }}
                        onContextMenu={(event) => event.preventDefault()}
                        style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                    />
                ))}
            </div>
            {currentIndex !== null && (
                <div className="lightbox" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <button type="button" onClick={goToPrevious} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} className="text-white text-2xl bg-black px-4 py-2 rounded-full">
                        <FaArrowLeft />
                    </button>
                    <img src={images[currentIndex]} alt="Lightbox" style={{
                        maxWidth: '75%',
                        maxHeight: '75%',
                        objectFit: 'contain'
                    }} onContextMenu={(event) => event.preventDefault()} />
                    <button type="button" onClick={goToNext} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} className="text-white text-2xl bg-black px-4 py-2 rounded-full">
                        <FaArrowRight />
                    </button>
                    <button type="button" onClick={closeLightbox} style={{ position: 'absolute', top: '10px', right: '10px' }} className="text-white text-2xl bg-black px-4 py-2 rounded-full"> Close </button>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
