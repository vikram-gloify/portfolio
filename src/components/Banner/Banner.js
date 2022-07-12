import React from 'react';
import { bannerCircle, download, hi, illustrations, uiux, work } from '../../constant/Images';
import './Banner.css';
function Banner() {
  return (
    <section id="banner-section">
        <div className="banner-content d-flex align-items-center pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="main-content">
                            <div className="item one wow fadeInDown">
                                <img src={uiux} alt="img"/>
                                <h5>UI/UX</h5>
                            </div>
                            <div className="item two wow fadeInDown">
                                <img src={illustrations} alt="img"/>
                                <h5>Illustrations</h5>
                            </div>
                            <div className="item three wow fadeInDown">
                                <img src={hi} alt="img"/>
                                <h5>Hi there!</h5>
                            </div>
                            <div className="item four wow fadeInDown">
                                <img src={work} alt="img"/>
                                <h5>Work with me</h5>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="right-area text-center">
                                        <img src={bannerCircle} className="right-img" alt="banner-circle"/>
                                        <div className="download-area">
                                            <a href="#download" className="download">Download CV
                                                <img src={download} alt="img"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7 d-flex align-items-center">
                        <div className="text-area text-center">
                            <h5>HI THERE, I'M JAMES</h5>
                            <h2>A <span>Digital</span> Product Designer</h2>
                            <div className="btn-area d-flex align-items-center justify-content-center">
                                <a href="contact.html" className="cmn-btn">Contact Me</a>
                                <a href="portfolio.html" className="cmn-btn-second">View Project
                                    <span className="btn-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner;