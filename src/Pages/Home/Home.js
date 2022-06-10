import React from 'react';
import GetService from './GetService';
import Profile from './Profile';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <GetService></GetService>

        </div>
    );
};

export default Home;