import React from 'react';
import Hero from './Hero';
import Video from './Video';
import Story from './Story';
import SchoolSlider from '../Common/SchoolSlider';
import StudentSlider from './StudentSlider';


const Home = () => (
    <div>
        <div className="content mx-0">
            <Hero />
            <Video />
            <Story />
            <SchoolSlider />
            <StudentSlider />
        </div>
    </div>
);

export default Home;
