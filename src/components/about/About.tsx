import React from 'react';

const About = () => {
    return (
        <div className="about">
            <h2>Студія дизайну "Dream Design by Julianna" </h2>
            <div className="about-box">
                <div className="about-img">
                    <img src='images/julianna.jpg' alt='myPhoto'></img>
                </div>
                <div className="about-info">
                    <p>Я — дизайнер, який закоханий у свою роботу. Моя мета — створювати неповторні і казкові образи інтер'єрів та екстер'єрів, що роблять кожен проект особливим. Мої роботи — це не лише дизайн, це створення атмосфери, яка запам'ятовується назавжди. Я вірю, що в кожному просторі може бути місце для мрій і краси. Обирайте мене, і ми разом створимо щось неймовірне для вашого життя.
                    </p>
                    <p>I am a designer deeply passionate about my craft. My goal is to create unique and enchanting interior and exterior visualizations that make each project truly special. My work goes beyond design; it's about crafting an atmosphere that leaves a lasting impression. I believe that every space has the potential for dreams and beauty. Choose me, and together we will create something extraordinary for your life.</p>
                </div>
            </div>
        </div>
    );
};

export {About};