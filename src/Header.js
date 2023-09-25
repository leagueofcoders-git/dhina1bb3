import React, { useState, useEffect } from "react";

const Header = () => {

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
        <div id="header">
            <header id="header" className="fixed-top  navbar-dark bg-dark shadow-5-strong">
                <div className="container d-flex align-items-center justify-content-lg-between">
                    <h1 className="logo me-auto me-lg-0"><a href="index.html">FA<span>.</span></a></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <a className="nav-link scrollto active" href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="courses">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto " href="recipes">
                                    Recipes
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="team">
                                    Team
                                </a>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <a href="#about" className="get-started-btn scrollto">Get Started</a>
                </div>
            </header>
        </div>
    )
}

export default Header