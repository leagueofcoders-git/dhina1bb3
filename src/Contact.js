import { useState, useEffect } from 'react'

const Contact = () => {

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSubject, setInputSubject] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  
  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(inputName));
    localStorage.setItem("email", JSON.stringify(inputEmail));
    localStorage.setItem("subject", JSON.stringify(inputSubject));
    localStorage.setItem("message", JSON.stringify(inputMessage));
  }, [inputName,inputEmail,inputSubject,inputMessage]);
  return (
    <div>
       {/* ======= Contact Section ======= */}
  <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>
{/* 
      <div>
        <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div> */}

      <div className="row mt-5">

        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>142 Adam Road</p>
              <p>Tanjong Paghar 535022, Singapore</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@fa.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+65 678945</p>
            </div>

          </div>

        </div>

        <div className="col-lg-8 mt-5 mt-lg-0">

          <form onSubmit = {(e) => e.preventDefault()} className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="Your Name" required/>
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="Your Email" required/>
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" value={inputSubject} onChange={(e) => setInputSubject(e.target.value)} placeholder="Subject" required/>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit" value="Submit" >Send Message</button></div>
          </form>

        </div>

      </div>

    </div>
  </section>{/* End Contact Section */}

    </div>
  )
}

export default Contact
