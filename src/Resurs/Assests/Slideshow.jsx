import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Make sure to include your CSS file

const Slideshow = () => {
    const [slides, setSlides] = useState([]);
    const [active, setActive] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await fetch('https://newsalooo.onrender.com/api/photos');
            const data = await response.json();
            setSlides(data);
        };

        fetchPhotos();
    }, []);

    const max = slides.length;

    useEffect(() => {
        const interval = autoplay ? setInterval(() => {
            setActive((prev) => (prev + 1) % max);
        }, 3000) : null;

        return () => clearInterval(interval);
    }, [autoplay, max]);

    const toggleAutoPlay = () => setAutoplay(!autoplay);

    const renderSlides = () => (
        max > 0 && (
            <div className='each-slide' style={{ backgroundImage: `url(${slides[active].url})` }} />
        )
    );

    const renderDots = () => (
        <ul className='dots-container'>
            {slides.map((_, index) => (
                <li className={active === index ? 'active' : ''} key={index}>
                    <button onClick={() => setActive(index)}>&#9679;</button>
                </li>
            ))}
        </ul>
    );

    const renderArrows = () => (
        <>
            <button className='arrows prev' onClick={() => setActive((active - 1 + max) % max)} disabled={max === 0}>
                <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
                </svg>
            </button>
            <button className='arrows next' onClick={() => setActive((active + 1) % max)} disabled={max === 0}>
                <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                </svg>
            </button>
        </>
    );

    return (
        <section className='slider'>
            <div className='wrapper'>{renderSlides()}</div>
            {renderArrows()}
            {renderDots()}
            <button type='button' className='toggle-play' onClick={toggleAutoPlay}>
                {autoplay ? (
                    <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                        <path d='M0 0h24v24H0z' fill='none' />
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' />
                    </svg>
                ) : (
                    <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                        <path d='M0 0h24v24H0z' fill='none' />
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' />
                    </svg>
                )}
            </button>
        </section>
    );
};

export default Slideshow;
