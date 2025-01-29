import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive my best proyects details
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Suscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to="/">How it works</Link>

            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Proyects</h2>
            <Link to="/">Art Experiences</Link>

            <Link to="/">Virtual Paths</Link>
            <Link to="/">Hiper Realistic Views</Link>
            <Link to="/">Scenes Rendered</Link>
            <Link to="/">Videos</Link>
          </div> 
          
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Work Experience</h2>
            <Link to="/">Companies</Link>

            <Link to="/">Clients</Link>
            <Link to="/">Education</Link>
            <Link to="/">Web Development</Link>
            <Link to="/">Media</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">How it works</Link>

            <Link to="/">Instagram</Link>
            <Link to="/">X</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Tik-tok</Link>
          </div> 
          
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo"> Pablo Cancino 
            <i className="fa-solid fa-pen-ruler" />
              
            </Link>
          </div>
          <small className="website-rights">Pablo Cancino © 2024</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook">
              <i className="fa-brands fa-facebook" />
            </Link>
            <Link className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube">
              <i className="fab fa-youtube"></i>
            </Link><Link className="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link><Link className="social-icon-link linkedin"
            to="/"
            target="_blank"
            aria-label="Linkedin">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default Footer;
