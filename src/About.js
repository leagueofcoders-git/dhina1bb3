import React, { useState, useEffect } from "react";

const About = () => {

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
    <div id="about">
       {/* ======= About Section ======= */}
  <section id="about" className="about" style={{marginTop:"90px"}}>
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
          <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
          <h3>About Fitness Always</h3>
          <p className="fst-italic">
          Fitness Always is Asia’s top fitness organization. It has the most number of authentic World Champions available anywhere in the world. Our award-winning instructors are not only proven competitors at the highest levels in the world, but they have also earned instructor certifications at the highest 
levels from the foremost authorities. Fitness Always consistently ranks among the best fitness organizations in the world for fitness.
By creating a safe, fun, and supportive environment, Fitness Always enables everyone to enjoy the benefits of fitness:
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Fitness and good health</li>
            <li><i className="ri-check-double-line"></i> Confidence, mental strength, and discipline</li>
            <li><i className="ri-check-double-line"></i> Lifelong friendships</li>
          </ul>
          {/* <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p> */}
        </div>
      </div>

    </div>
  </section>{/* End About Section */}

    </div>
  )
}

export default About
