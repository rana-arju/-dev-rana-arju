import React from 'react';
import '../App.css';

import Github from '../images/github.png';
import Facebook from '../images/facebook.png';
import Linkedin from '../images/linkedin.png';

import rana1 from '../images/rana arju.gif';

const Hero = () => {
    return (
        <div className="mt-8">
            <div className="hero h-fit md:h-[550px] ">
            <div className="hero-content flex-col lg:flex-row-reverse items-start">
                <div className='w-full md:w-1/2 hero-right'>
                   <img src="https://i.ibb.co/y6C3pd2/rana.gif" alt="" />

                </div>
                
                <div className='w-full md:w-1/2 hero-left'>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Hy! I'm <br /><span className='cl-title'>Rana Arju</span> </h1>
                    <p className="py-6 w-11/12">I'm a MERN Stack web developer and WordPress theme developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. </p>
                    <a href="#contact" className="custome-btn uppercase">hire Me</a>
                    <div className="social-icons flex gap-5 mt-8">
                        <a href="https://www.github.com/rana-arju"><img src={Github} alt="" /></a>
                        <a href="https://www.linkedin.com/in/rana-arju"> <img src={Linkedin} alt="" /></a>
                    <a href="https://www.facebook.com/ranaarju1"><img src={Facebook} alt="" style={{color: "var(--orange)"}}/></a>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;