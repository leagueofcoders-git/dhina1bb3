import React, { useState, useEffect } from "react";
import axios from "axios";

const url = 'https://keto-diet.p.rapidapi.com/?protein_in_grams__lt=15&protein_in_grams__gt=5';

const options = {
  method: "get",
  mode:'cors',
  credentials: 'include',
  headers: {
    "X-RapidAPI-Key": "473d2e2d80mshdf3d12cdc1a2fccp1b2e89jsnbd730ce1a2cf",
    "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
    "Content-Type": "application/json"
  }
};
const Products = () => {
  const [products, setProducts] = useState([]);
  const ketoRecipes = async () => {
    const response = await fetch(url, options)
    const result = await response.json();
    // console.log(result)
    setProducts(result);
  };

  useEffect(() => {
    ketoRecipes();
  }, []);

  useEffect(() => {
    let scripts = [
        {src:"assets/vendor/purecounter/purecounter_vanilla.js"},
        {src:"assets/vendor/aos/aos.js"},
        {src:"assets/vendor/bootstrap/js/bootstrap.bundle.min.js"},
        {src:"assets/vendor/glightbox/js/glightbox.min.js"},
        {src:"assets/vendor/isotope-layout/isotope.pkgd.min.js"},
        {src:"assets/vendor/swiper/swiper-bundle.min.js"},
        {src:"assets/js/main.js"},
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
 // let randomReceipes = [...Array(142)].map(_ => Math.random() * products.length | 0)
  //console.log(randomReceipes);
  return (
    <div id="portfolio">
  <section id="portfolio" className="portfolio" style={{marginTop:"90px"}}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Recipies <span style={{color:"red"}}>(Refresh the browser a few times if the images are not fully loaded)</span></h2>
            <p>Check our Keto Free Recipes from keto-diet.p.rapidapi.com</p>
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200">
            {products.map((filteredPoductList) => {
            
              return (
              <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                    <img src={filteredPoductList.image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>{filteredPoductList.recipe}</h4>
                      <p>{filteredPoductList.directions_step_1}</p>
                      <p>{filteredPoductList.directions_step_2}</p>
                      <p>{filteredPoductList.directions_step_3}</p>
                      <p>{filteredPoductList.directions_step_4}</p>
                      <div className="portfolio-links">
                        <a
                          href={filteredPoductList.image}
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1" >
                          <i className="bx bx-plus"></i>
                        </a>
                        <a href={filteredPoductList.image} title="More Details">
                          <i className="bx bx-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
              );            
            })}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Products;
