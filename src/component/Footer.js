import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div style={{background: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"}}>
        <footer className="footer items-center p-4  text-neutral-content container mx-auto" >
            <div className="items-center grid-flow-col">
                <p className='text-md md:text-lg'>Copyright © 2022 - All right reserved &#129505; Rana Arju </p>
            </div> 
            <div className="grid grid-flow-col gap-8 items-center footer-icons">
               <a href="http://www.github.com/rana-arju" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
               <a href="http://www.linkedin.com/in/rana-arju" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
               <a href="http://www.facebook.com/ranaarju1" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            </div>
        </footer>
        </div>
    );
};

export default Footer;