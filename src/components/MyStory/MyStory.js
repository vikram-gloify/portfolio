import React from 'react'

function MyStory() {
  return (
    <section id="my-story-section">
        <div className="overlay pt-120">
            <div className="container">
                <div className="row d-flex justify-content-between wow fadeInUp">
                    <div className="col-lg-5 col-md-6">
                        <div className="left-area">
                            <h3 className="title">My Story</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sit senectus maecenas donec amet viverra. Aliquam aenean eget gravida vitae nunc vitae sit.</p>
                            <p>Tincidunt neque mattis nisl elit enim lacus ultrices augue. Sed morbi quam turpis ultrices et in. Congue blandit feugiat lobortis eu, leo. Pretium molestie enim leo porttitor netus tempor. Faucibus velit turpis nunc lacus</p>
                            <h1>Designing since i was 16 years old</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sit senectus maecenas donec amet viverra. Aliquam aenean eget gravida vitae nunc vitae sit.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="right-area">
                            <img src="./images/story-object.png" alt="object" className="object"/>
                            <div className="main-img">
                                <div className="img-area">
                                    <img src="./images/story-right.png" alt="img"/>
                                </div>
                            </div>
                            <img src="./images/story-user.png" alt="profile" className="user"/>
                            
                        </div>
                        <div className="social-area">
                            <div className="social d-flex">
                                <a href="/" className="single-icon behance"><img src="images/social-Icon4.png" alt="social"/></a>
                                <a href="/" className="single-icon instagram"><img src="images/social-Icon5.png" alt="social"/></a>
                                <a href="/" className="single-icon dribbble"><img src="images/social-Icon6.png" alt="social"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MyStory