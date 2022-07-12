import React from 'react';
import { cartImage1, cartImage2, closeBtn, logo } from '../../constant/Images';


const Navbar = () => {
    return (
        <>
         {/* scrollToTop */}
         <a href="#home" className="scrollToTop active"><i className="fas fa-angle-double-up"></i></a>


        {/* header-section start  */}
        <header id="header-section" className="animated fadeInDown header-fixed">
        <div className="overlay">
            <div className="container">
                <div className="row d-flex header-area">
                    <div className="logo-section flex-grow-1 d-flex align-items-center">
                        <a className="site-logo site-title" href="index.html"><img src={logo} alt="site-logo"/></a>
                    </div>
                    <button className="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <nav className="navbar navbar-expand-lg p-0">
                        <div className="navbar-collapse collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav main-menu ml-auto">
                                <li><a href="index.html" className="active">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="products.html">Products</a></li>
                                <li className="menu_has_children"><a href="#0">Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="products-single.html">Products Single</a></li>
                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                    </ul>
                                </li>
                                <li className="cart-area">
                                    <button className="cart-toggle cart">
                                        Cart<span>2</span>
                                    </button>
                                    <div className="cart-menu">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="cart-items">
                                                    <div className="dropdown-items d-flex">
                                                        <div className="image-area">
                                                            <img src={cartImage1} alt="img"/>
                                                        </div>
                                                        <div className="text-area">
                                                            <h5>Minimalistic Phone Mockup</h5>
                                                            <p className="qnt">Quantity: <span>1</span></p>
                                                            <p className="price">$<span>10.00</span></p>
                                                        </div>
                                                        <button type="button"><img src={closeBtn} alt="img"/></button>
                                                    </div>
                                                </div>
                                                <div className="cart-items">
                                                    <div className="dropdown-items d-flex">
                                                        <div className="image-area">
                                                            <img src={cartImage2} alt="img"/>
                                                        </div>
                                                        <div className="text-area">
                                                            <h5>Minimalistic Phone Mockup</h5>
                                                            <p className="qnt">Quantity: <span>1</span></p>
                                                            <p className="price">$<span>10.00</span></p>
                                                        </div>
                                                        <button type="button"><img src={closeBtn} alt="img"/></button>
                                                    </div>
                                                </div>
                                                <div className="total-order d-flex justify-content-between">
                                                    <p>Order total:</p>
                                                    <p className="dollar">$<span>20.00</span></p>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <a href="#view" className="view">VIEW CART &amp; CHECKOUT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="right-area header-action d-flex align-items-center">
                        <a href="contact.html" className="cmn-btn">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default Navbar;