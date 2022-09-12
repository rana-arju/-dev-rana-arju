import '../App.css';
import Service from './service';
const Services = () => {
    return (
        <div  id='services'>
        <div className="hero h-full">
            <div className="hero-content flex flex-col justify-around md:flex-row-reverse">
                <div className='w-full md:w-3/5 gap-5 grid grid-cols-1 md:grid-cols-2 order-1 md:order-none'>
                    <Service img="https://i.ibb.co/YyvjH8X/wp-customizarion.jpg" title="WordPress Theme Customization"  />
                    <Service img="https://i.ibb.co/r4G8273/seo.jpg" title="WordPress Website SEO"  />
                    <Service img="https://i.ibb.co/64gJKFD/web-design.jpg" title="Full MERN Stack Application Build"  />
                    <Service img="https://i.ibb.co/rcXrtFn/Web-design-1.webp" title="Full Website Design"  />
                </div>
                <div className='w-full md:w-2/5 hero-left mb-5'>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">My Awesome <br /><span className='cl-title'>Services</span> </h1>
                    <p className="py-6 w-11/12">I'm a MERN Stack web developer and WordPress theme developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. </p>
                    <a href="#contact" className="custome-btn uppercase">hire Me</a>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;