import React, { useState, useEffect } from "react";

const Navigation = () => {

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
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container" data-aos="fade-up">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8">
              <h1>
                Fitness Always for you<span>.</span>
              </h1>
              <h2>We are team of dedicated fitness enthusiasts to bring the best out of you.</h2>
            </div>
          </div>

          <div
            className="row gy-4 mt-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            {/* <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line"></i>
                <h3>
                  <a href="">Pilates</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line"></i>
                <h3>
                  <a href="">Yoga</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-calendar-todo-line"></i>
                <h3>
                  <a href="">Cardio</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-paint-brush-line"></i>
                <h3>
                  <a href="">Yoga</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-database-2-line"></i>
                <h3>
                  <a href="">Gym</a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};

export default Navigation;
