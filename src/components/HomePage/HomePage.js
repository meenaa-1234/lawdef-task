import React from "react";
import {Navbar } from 'react-bootstrap'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './HomePage.css'
import logo from './img/logo.png'
import bgimg from './img/bgimg.jpg';
import {AiFillPhone} from 'react-icons/ai'
const Homepage = () => {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <>
        <div className="body5">
            <div className="Navbar">
                
         <Navbar fixed="top" className="Navbar">
                {/* <ul className="navlinks">
                
                    <li className="navitems"><a href="default.asp">Start Business</a></li>
                    <li className="navitems"><a href="news.asp">Protection</a></li>
                    <li className="navitems"><a href="contact.asp">Registration</a></li>
                    <li className="navitems"><a href="about.asp">Tax</a></li>
                    <li className="navitems"><a href="about.asp">Blog</a></li>
                    <li className="navitems"><a href="about.asp">Contact Us</a></li>
                    <li className="navitems"><a href="about.asp"><AiFillPhone/>+91990993783</a></li>
                </ul> */}
                <header>
                <img src={logo}  className="img1"  alt=""/>
			<nav ref={navRef} className="nav3">
            
				<a href="/#">Start Business</a>
				<a href="/#">Protection</a>
				<a href="/#">Registration</a>
				<a href="/#">Tax</a>
				<a href="/#">Blog</a>
				<a href="/#">Contact Us</a>
				<a href="/#"><AiFillPhone/>+91990993783</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
                </Navbar>
            </div>
            <div className="bgimg">
                <img src={bgimg} className="bgimg1" alt=""/>
            </div>
            <div>
                <h2 className="text1">Complete Trade Mark/Logo/Brand and other legal service registration by the leading attorney/registered agency for TM in Delhi, India.</h2>
            </div>
            </div>
        </>
    )
}
export default Homepage;
