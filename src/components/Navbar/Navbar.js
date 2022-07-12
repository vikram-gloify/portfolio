import React from 'react';
import { logo } from '../../constant/Images';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        {/* Preloader Section */}
        <div className="preloader" id="preloader"></div>
        {/* scrollToTop Section */}
        <a href="/" className="scrollToTop active"><i className="fas fa-angle-double-up"></i></a>
        {/* Header Section */}
        <header id="header-section">
        <div className="overlay">
            <div className="container">
                <div className="row d-inline-flex header-area">
                    <div className="logo-section flex-grow-1 d-inline-flex align-items-center">
                        <a className="site-logo site-title" href="#home"><img src={logo} alt="site-logo"/></a>
                    </div>
                    <button className="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <nav className="navbar navbar-expand-lg p-0">
                        <div className="navbar-collapse collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav main-menu ml-auto">
                                <li><a href="#home" className="active">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#products">Products</a></li>
                                <li className="menu_has_children"><a href="#0">Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="#blog">Blog</a></li>
                                        <li><a href="#blog-single">Blog Single</a></li>
                                        <li><a href="#products-single">Products Single</a></li>
                                        <li><a href="#portfolio-details">Portfolio Details</a></li>
                                        <li><a href="#pricing">Pricing</a></li>
                                        <li><a href="#cart">Cart</a></li>
                                    </ul>
                                </li>
                                <li className="cart-area">
                                    <button className="cart-toggle cart">
                                        Cart<span>2</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="right-area header-action d-flex align-items-center">
                        <a href="contact" className="cmn-btn">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default Navbar;