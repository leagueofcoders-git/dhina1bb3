import React, { useState, useEffect } from "react";

const Courses = () => {

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
    <div>
      <section id="services" className="services"  style={{marginTop:"90px"}}>
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Courses</h2>
            <p>Check our Courses</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                <h4><a href="">Pilates</a></h4>
                <p>Whatever Your Age, Skill Level or Time Commitment, Find Pilates Classes to Fit Your Needs.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-file"></i></div>
                <h4><a href="">Yoga</a></h4>
                <p>Fitness Yoga, Weight Loss Yoga, Hot Yoga, Gentle Yoga Stretch, Aerial Yoga, and Rope Yoga. Platinum Yoga</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer"></i></div>
                <h4><a href="">Cardio</a></h4>
                <p>Some of the best cardio exercises include running, swimming, and cycling.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-world"></i></div>
                <h4><a href="">Gym</a></h4>
                <p> Gain 24/7 access to 4500+ gyms worldwide with state-of the-art equipment and highly personable staff.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-slideshow"></i></div>
                <h4><a href="">Strength training</a></h4>
                <p>Strength training or resistance training involves the performance of physical exercises that are designed to improve strength and endurance.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-arch"></i></div>
                <h4><a href="">Aerobic exercise</a></h4>
                <p>Aerobic exercise is physical exercise of low to high intensity that depends primarily on the aerobic energy-generating process. </p>
              </div>
            </div>

          </div>

        </div>
      </section>{/* End Services Section */}
    </div>
  )
}

export default Courses
