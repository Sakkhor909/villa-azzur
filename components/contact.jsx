import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterest
} from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function Contact() {
  return (
    <div className="cotact-section">
      <h2 className="heading">Get in Touch</h2>
      <div className="line"></div>
      <p className="text-gray">Contact us for any queries.</p>
      <div className="contact-columns">
        <div className="contact-info">
          <div className="title">Contact Info</div>
          <address className="text-gray">
            House- 61, Road- 15, Block- D, Banani 1213 Dhaka, Dhaka Division,
            Bangladesh.
          </address>
          <div className="phone-number">01798-777766</div>
          <div className="text-gray">villaazur@gmail.com</div>
          <div className="social-icons">
            <a>
              <FaFacebookF />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <BiWorld />
            </a>
            <a>
              <FaGooglePlusG />
            </a>
            <a>
              <FaLinkedinIn />
            </a>
            <a>
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="open-hourse-section">
          <div className="title">Open Hours</div>
          <div className="week">Monday — Sunday</div>
          <div className="time">12 pm — 11 pm</div>
          <div className="text-gray">
            Note: Restaurant is opened on holidays as well.
          </div>
        </div>
        <div className="contact-form-section">
          <div className="title">Say Hello!</div>
          <form className="contact-form">
            <input type="text" name="Name" placeholder="Name*" />
            <input type="email" name="Email" placeholder="Email*" />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="*Message*"
              className="text-msg"
            ></textarea>
            <button type="submit" className="Send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
