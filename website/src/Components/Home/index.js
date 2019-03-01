import React from 'react';
import Hero from './Hero';
import Video from './Video';
import Story from './Story';


const Home = () => {
    console.log('----');
    return (
        <div>
            <div className="content mx-0">
                <Hero />
                <Video />
                <Story />
            </div>
        </div>
    );
};

export default Home;
