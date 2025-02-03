// import "./../styles/Footer.css";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Section 1: Social Links & Contact */}
          <div className="footer-section">
            {/* <div className="social-links">
            <a
              href="https://www.facebook.com/share/168JJbjmbq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div> */}
            <h5 className="footer-title">EECCA LAGOS STATE CHAPTER</h5>
            <p className="footer-description">
              <strong style={{ color: "blue" }}>Contact Us</strong> <br />
              +2348027234690
              <br />
              eeccalagos@gmail.com
              <br />
              22, Shopping Complex Aswinw, Isolo Way Lagos State.
            </p>
          </div>
          {/* Section 2: Company Links */}
          <div className="footer-se">
            <div>
              <h5>Company</h5>
              <ul>
                <b />
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Location</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="membership.html">Registration</a>
                </li>
                <li>
                  <a href="our works.html">Gallery</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="copyright">
          <p>&copy; 2025 EECCA LAGOS CHAPTER. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
