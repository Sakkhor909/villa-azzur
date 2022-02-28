import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterest
} from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { useRef, useEffect, useContext } from "react";
import { NavContext } from "../contexts/navContext";
import { CSSTransition } from "react-transition-group";
import { useInViewport } from "react-in-viewport";
function Contact() {
  const ContactRef = useRef();
  const titleSectionRef = useRef();
  const contactinfoRef = useRef();
  const contactFormRef = useRef();
  const openHoursRef = useRef();
  // defining inViewport
  const { inViewport } = useInViewport(ContactRef, {
    threshold: 0.3
  });
  const {
    inViewport: titleSectionInViewport,
    enterCount: titleSectionInViewportCount
  } = useInViewport(titleSectionRef);
  const {
    inViewport: contactinfoInViewport,
    enterCount: contactinfonInViewportCount
  } = useInViewport(contactinfoRef);
  const {
    inViewport: contactFormInViewport,
    enterCount: contactFormInViewportCount
  } = useInViewport(contactFormRef);
  const {
    inViewport: openHoursInViewport,
    enterCount: openHoursInViewportCount
  } = useInViewport(openHoursRef);
  const [
    HomeVisibile,
    setHomeVisibile,
    AboutVisibile,
    setAboutVisibile,
    SpecialVisibile,
    setSpecialVisibile,
    MenuVisibile,
    setMenuVisibile,
    ReservationVisibile,
    setReservationVisibile,
    TeamVisibile,
    setTeamVisibile,
    GalleryVisibile,
    setGalleryVisibile,
    BlogVisibile,
    setBlogVisibile,
    ContactVisibile,
    setContactVisibile
  ] = useContext(NavContext);
  useEffect(() => {
    setContactVisibile(inViewport);
  }, [setContactVisibile, inViewport]);
  return (
    <div className="cotact-section" ref={ContactRef}>
      <CSSTransition
        in={titleSectionInViewport && titleSectionInViewportCount === 1}
        timeout={1500}
        classNames="silde-down"
      >
        <div className="title-section" ref={titleSectionRef}>
          <h2 className="heading">Get in Touch</h2>
          <div className="line"></div>
          <p className="text-gray">Contact us for any queries.</p>
        </div>
      </CSSTransition>

      <div className="contact-columns">
        <CSSTransition
          in={contactinfoInViewport && contactinfonInViewportCount === 1}
          timeout={1500}
          classNames="slide-right"
        >
          <div className="contact-info" ref={contactinfoRef}>
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
        </CSSTransition>
        <CSSTransition
          in={openHoursInViewport && openHoursInViewportCount === 1}
          timeout={1500}
          classNames="slide-up"
        >
          <div className="open-hourse-section" ref={openHoursRef}>
            <div className="title">Open Hours</div>
            <div className="week">Monday — Sunday</div>
            <div className="time">12 pm — 11 pm</div>
            <div className="text-gray">
              Note: Restaurant is opened on holidays as well.
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={contactFormInViewport && contactFormInViewportCount === 1}
          timeout={1500}
          classNames="slide-left"
        >
          <div className="contact-form-section" ref={contactFormRef}>
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
        </CSSTransition>
      </div>
    </div>
  );
}

export default Contact;
