import React, { useState, useEffect } from "react";

const Team = () => {

  useEffect(() => {
    let scripts = [
        {src:"/assets/vendor/purecounter/purecounter_vanilla.js"},
        {src:"/assets/vendor/aos/aos.js"},
        {src:"/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"},
        {src:"/assets/vendor/glightbox/js/glightbox.min.js"},
        {src:"/assets/vendor/isotope-layout/isotope.pkgd.min.js"},
        {src:"/assets/vendor/swiper/swiper-bundle.min.js"},
        {src:"/assets/js/main.js"},
    ]
    //Append the script element on each iteration
    scripts.map(item => { 
        const script = document.createElement("script")
        script.src = item.src
        script.async = false
        script.defer = false
        document.body.appendChild(script)
    }) 
},[])
  return (
    <div id="team">
        {/* ======= Team Section ======= */}
  <section id="team" className="team" style={{marginTop:"90px"}}>
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Team</h2>
        <p>Check our Team</p>
      </div>

      <div className="row">

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="200">
            <div className="member-img">
              <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Chief Fitness Officer</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="300">
            <div className="member-img">
              <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>Head Nutritionist </span>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="400">
            <div className="member-img">
              <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
            </div>
          </div>
        </div> */}

      </div>

    </div>
  </section>{/* End Team Section */}
    </div>
  )
}

export default Team
