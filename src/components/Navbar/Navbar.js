import React from 'react'
import { cartImage1, cartImage2, closeBtn, logo } from '../../constant/Images';
import ScrollToTop from '../Scroll/ScrollToTop';
import './Navbar.css';

function Navbar() {
  return (
    <div>
         {/* ScrollToTop */}

     <ScrollToTop/>
      
      {/* header-section start  */}
      <header id="header-section" className="animated fadeInDown header-fixed">
        <div className="overlay">
          <div className="container">
            <div className="header header-area">
              <div className="logo-section flex-grow-1  align-items-center">
                <a className="site-logo site-title" href="/">
                  <img src={logo} alt="site-logo" />
                </a>
              </div>

              {/* Navbar */}
              <nav className="navbar navbar-expand-lg p-0">
                <div
                  className="navbar-collapse collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav main-menu ml-auto">
                    <li>
                      <a href="/" className="active">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about-page">About</a>
                    </li>
                    <li>
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="/products">Products</a>
                    </li>
                    <li className="menu_has_children">
                      <a href="/">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                        <li>
                          <a href="/blog-single">Blog Single</a>
                        </li>
                        <li>
                          <a href="/products-single">Products Single</a>
                        </li>
                        <li>
                          <a href="/portfolio-details">Portfolio Details</a>
                        </li>
                        <li>
                          <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                          <a href="/cart">Cart</a>
                        </li>
                      </ul>
                    </li>
                    {/* cart area */}
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
                                  <img src={cartImage1} alt="img" />
                                </div>
                                <div className="text-area">
                                  <h5>Minimalistic Phone Mockup</h5>
                                  <p className="qnt">
                                    Quantity: <span>1</span>
                                  </p>
                                  <p className="price">
                                    $<span>10.00</span>
                                  </p>
                                </div>
                                <button type="button">
                                  <img src={closeBtn} alt="img" />
                                </button>
                              </div>
                            </div>
                            <div className="cart-items">
                              <div className="dropdown-items d-flex">
                                <div className="image-area">
                                  <img src={cartImage2} alt="img" />
                                </div>
                                <div className="text-area">
                                  <h5>Minimalistic Phone Mockup</h5>
                                  <p className="qnt">
                                    Quantity: <span>1</span>
                                  </p>
                                  <p className="price">
                                    $<span>10.00</span>
                                  </p>
                                </div>
                                <button type="button">
                                  <img src={closeBtn} alt="img" />
                                </button>
                              </div>
                            </div>
                            <div className="total-order d-flex justify-content-between">
                              <p>Order total:</p>
                              <p className="dollar">
                                $<span>20.00</span>
                              </p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <a href="/view" className="view">
                                VIEW CART &amp; CHECKOUT
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Contact me Btn */}
              <div className="right-area header-action d-flex align-items-center">
                <a href="contact" className="cmn-btn">
                  Contact Me
                </a>
              </div>
              {/* Toggler bar */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar

