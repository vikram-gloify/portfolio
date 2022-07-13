import React from 'react';
import { TestimonialsUser1 } from '../../constant/Images';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h4 className="sub-title">What people say</h4>
                <h3 className="title">Trusted by brands all over the world</h3>
                <p>
                  User-friendly web pages are our thing. I’ve also helped some
                  awesome businesses with branding and custom solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-carousel slick-initialized slick-slider">
            <button
              type="button"
              className="slick-prev pull-left btn-icon slick-arrow"
            ></button>
            <div className="slick-list draggable">
              <div className="slick-track">
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                >
                  <div>
                    <div className="col">
                      <div className="row d-flex justify-content-between">
                        <div className="col-lg-5">
                          <div className="left-area">
                            <img src={TestimonialsUser1} alt="img" />
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <div className="text-area">
                            <h3>
                              Robert Wood has helped our business deliver
                              incredible results, leading success for our UI
                              &amp; UX
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed semper, sapien sit amet scelerisque
                              laoreet, eros justo congue neque, in maximus
                              tellus velit vitae lacus.
                            </p>
                            <h4>
                              Byron Burns <span>CEO @APPLE</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slick Arrow Btn Section */}
            
            <button
              type="button"
              className="slick-next pull-right btn-icon slick-arrow"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
