import React from 'react';
import { NowYourTurnImg} from '../../constant/Images';




function NowYourTurn() {
  return (
    <section id="now-your-turn">
    <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp visibility: visible; animation-name: fadeInUp;">
            <div className="row">
                <div className="col-lg-7">
                    <div className="section-header">
                        <h4 className="sub-title-alt">Now Your Turn</h4>
                        <h3 className="title">Interested in Working with Me?</h3>
                        <p>Do you need help with any web design or development project?
                            Let me give you a hand. Get in touch with me and i will get back to
                            you within <br /> 1-2 business days.</p>
                        <a href="/contact" className="cmn-btn">Contact me</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="right-area">
        <img src={NowYourTurnImg
} alt="img"/>
    </div>
    <div className="bottom-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-item">
                        <span className="counter">56</span>
                        <h5>Happy Clients</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-item second">
                        <span className="counter">16</span>
                        <h5>Years Experience</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-item third">
                        <span className="counter">30</span>
                        <span>k</span>
                        <h5>Hours Worked</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-item fourth">
                        <span className="counter">5</span>
                        <h5>Awards Won</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default NowYourTurn