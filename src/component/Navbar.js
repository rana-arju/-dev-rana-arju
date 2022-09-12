import { Link } from "react-router-dom";
import '../App.css';
const Navbar = () => {
    return (
        <div>
        <nav className="navbar md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="nav-item menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#protfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <a href="/home" className=" normal-case sm:text-lg md:text-2xl font-bold">Rana Arju</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 nav-item">
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#protfolio">Portfolio</a></li>
             <li><a href="#contact">Contact</a></li>
            
            
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://drive.google.com/file/d/1m7CpDhcNVPMsaDX2Q4WLum1F_JRn_SWf/view?usp=sharing" className="custome-btn">Resume</a>
        </div>
      </nav>
        </div>
    );
};

export default Navbar