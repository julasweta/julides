import React from 'react';
import Stories from 'react-insta-stories';



const MyStories = () => {
    const stories = [
     
        {
            url: 'https://example.com/pic2.jpg',
            duration: 5000,
            header: {
                heading: 'Mohit Karekar',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/100/100',
            },
        },
    ];

    return (
        <div>	<Stories
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
    /></div>
    );
};

export {MyStories};