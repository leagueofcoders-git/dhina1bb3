import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* ======= Footer ======= */}
<footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>FA<span>.</span></h3>
            <p>
              142 Adam Road <br/>
              Tanjong Paghar 535022, Singapore<br/><br/>
              <strong>Phone:</strong> +65 678945<br/>
              <strong>Email:</strong> info@fa.com<br/>
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/courses">Courses</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        {/* <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
          </ul>
        </div> */}

        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Subscribe to get daily fitness tips</p>
          <form action="" method="post">
            <input type="email" name="email"/><input type="submit" value="Subscribe"/>
          </form>

        </div>

      </div>
    </div>
  </div>

  <div className="container">
    <div className="copyright">
      &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>

</footer>{/* End Footer */}

    </div>
  )
}

export default Footer
