import React, {useEffect, useRef} from 'react';
import './home.css';
import {About} from '../about/About';

const Home = () => {
    const aboutRef = useRef(null); // Створюємо реф для компонента About для прокрутки

    useEffect(() => {
        // Чекаємо 3 секунди і прокручуємо до блоку About
        const scrollToAbout = setTimeout(() => {
            aboutRef.current.scrollIntoView({behavior: 'smooth'});
        }, 4000); // 3 секунди

        return () => clearTimeout(scrollToAbout);
    }, []);

    return (
        <div className="main">
            <div className="home">
                <div className="home-img">
                    <img src={`images/interior.jpg`} alt="img" />
                </div>
                <div className="home-info">
                    <p>JuliDes</p>
                    <h1>Dream Design by Julianna</h1>
                </div>
            </div>

            <div ref={aboutRef}>
                <About />
            </div>
        </div>
    );
};

export default Home;

