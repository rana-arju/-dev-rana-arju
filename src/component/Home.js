import React from 'react';
// import { FaBeer } from 'react-icons/fa';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Portfolio from './Portfolio';
import Skill from './Skill';
const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skill />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;