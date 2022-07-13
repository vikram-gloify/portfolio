import React from 'react';
import MyStory from '../../components/MyStory/MyStory';
import PastExperience from '../../components/PastExperience/PastExperience';
import ProfessionalSkills from '../../components/ProfessionalSkills/ProfessionalSkills';
import ScrollToTop from '../../components/Scroll/ScrollToTop';

function AboutPage() {
  return (
    <>
      {/* scrollToTop */}

      <ScrollToTop />

      {/* about */}

      <section id="banner-section" className="inner-banner about cart">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-start">
              <div className="col-lg-12">
                <div className="text-area">
                  <h1>About</h1>
                  <div className="breadcrumb-area">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb d-flex">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          About
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* my-story */}

      <MyStory />

      {/* professional-skills */}

      <ProfessionalSkills />

      {/* past-experience*/}

      <PastExperience />
    </>
  );
}

export default AboutPage;
