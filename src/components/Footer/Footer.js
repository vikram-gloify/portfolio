import React from 'react'
import { logo } from '../../constant/Images';


function Footer() {
  return (
    // Footer Section
    <footer id="footer-section">
        <div className="overlay pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="section-header pb-120 text-center">
                            <h4 className="sub-title-alt">Contact Me</h4>
                            <h3 className="title">Think I can help? Lets Talk!</h3>
                            <a href="/contact" className="cmn-btn">Let's Work Together</a>
                        </div>
                    </div>
                </div>
                <div className="bottom-area">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center justify-cen">
                            <a href="/">
                                <img src={logo} alt="logo"/>
                            </a>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 d-flex align-items-center justify-content-end justify-cen">
                            <ul className="d-flex">
                                <li><a href="/about">About</a></li>
                                <li><a href="/portfolio">Work</a></li>
                                <li><a href="/portfolio">Service</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Bottom  */}
        <div className="footer-bottom">
            <div className="container">
                <div className="main-content">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-start justify-cen">
                            <div className="left-area">
                                <p>Copyright © 2022. Made with passion by <a href="https://themeforest.net/user/uiaxis">Vikram Singh</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end justify-cen">
                            <div className="right-area">
                                <p>All right reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;