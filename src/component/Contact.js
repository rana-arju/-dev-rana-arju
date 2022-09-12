import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio_rana_arju', 'template_we34ezl', form.current, 'NVoyRWy1HhJ-3DfFm')
      .then((result) => {
          if (result) {
              toast.success('Message Send Successful!')
          }
      }, (error) => {
          toast.error(error.text);
      });
      e.target.reset();
  };
    return (
            <div className="hero min-h-screen  min-w-4/5 mx-auto" id='contact'>
            <div className="hero-content flex-col md:flex-row gap-10">
            <div className="text-left flex-shrink-0 w-80 md:w-96">
                <h3 className="text-2xl text-center md:text-left md:text-3xl lg:text-5xl font-bold capitalize ">get in touch</h3>
                <p className="py-2 text-center md:text-left cl-title text-lg md:text-xl ">Contact Me</p>
               
                <div className="card text-primary-content py-10" style={{background: "var(--gray)"}}>
                    <div className="card-body text-left">
                        <div>
                            <h2 className="card-title">Address:</h2>
                            <p>Cox's Bazar, Bangladesh</p>
                        </div>
                        <div>
                            <h2 className="card-title">Phone:</h2>
                            <a href="tel:+8801881220413">01881220413</a>
                        </div> 
                        <div>
                            <h2 className="card-title">Email:</h2>
                            <a href="mailto:arjurana20@gmail.com">arjurana20@gmail.com</a>
                        </div>
                      
                    </div>
                    </div>
                
            </div>
            <div className="card flex-shrink-0 shadow-2xl  w-80 md:w-96">
                <form ref={form} onSubmit={sendEmail} >
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Name" name='name' className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Enter Email" name='email' className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 textarea-[var(--orange)]" placeholder="Type Message..." name='msg' required></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button className="custome-btn" type='submit'>Send Message</button>
                    
                    </div>
                    
                </div>
                </form>
                
                </div>
                <div className="blur" style={{ background: "var(--purple)", top: "1rem", left: "8rem" }}>
                </div>
            </div>
            
            </div>
            
    );
};

export default Contact;