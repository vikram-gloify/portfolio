import React from 'react';
import { Brand1, Brand2, Brand3, Brand4 } from '../../constant/Images';
import './WorkWith.css';

function WorkWith() {
  return (
    // WorkWith Section
    <section id="worked-with">
      <div className="container">
        <div className="main-content wow fadeInUp">
          <h2>I Worked With</h2>
          <div className="worked-carousel slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div className="slick-track">
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="-4"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div>
                    <div className="single-item">
                      <img src={Brand2} alt="img" />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="-3"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div>
                    <div className="single-item">
                      <img src={Brand3} alt="img" />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="-2"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div>
                    <div className="single-item">
                      <img src={Brand4} alt="img" />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="-1"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div>
                    <div className="single-item">
                      <img src={Brand2} alt="img" />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div>
                    <div className="single-item">
                      <img src={Brand1} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkWith;
