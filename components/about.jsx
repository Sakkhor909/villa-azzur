import Image from "next/image";
import { useRef, useEffect, useContext } from "react";
import { NavContext } from "../contexts/navContext";
import { CSSTransition } from "react-transition-group";
import { useInViewport } from "react-in-viewport";

function About({ MenuClick }) {
  // Defining ref
  const AboutRef = useRef();
  const imagesSectionRef = useRef();
  const titleSectionRef = useRef();
  const textSectionRef = useRef();
  const lastSectionTextRef = useRef();
  const lastSectionImageRef = useRef();
  // defining inViewport
  const { inViewport } = useInViewport(AboutRef, {
    threshold: 0.3
  });
  const {
    inViewport: titleSectionInViewport,
    enterCount: titleSectionInViewportCount
  } = useInViewport(titleSectionRef);
  const {
    inViewport: imagesSectioninViewport,
    enterCount: imagesSectioninViewportCount
  } = useInViewport(imagesSectionRef);
  const {
    inViewport: textSectionInViewport,
    enterCount: textSectionInViewportCount
  } = useInViewport(textSectionRef);
  const {
    inViewport: lastSectionTextInViewport,
    enterCount: lastSectionTextInViewportCount
  } = useInViewport(lastSectionTextRef);
  const {
    inViewport: lastSectionImageInViewport,
    enterCount: lastSectionImageInViewportCount
  } = useInViewport(lastSectionImageRef);
  const [HomeVisibile, setHomeVisibile, AboutVisibile, setAboutVisibile] =
    useContext(NavContext);
  useEffect(() => {
    setAboutVisibile(inViewport);
  }, [setAboutVisibile, inViewport]);
  return (
    <div
      className={`about-section ${MenuClick ? "mt" : null}`}
      id="about"
      ref={AboutRef}
    >
      <CSSTransition
        in={titleSectionInViewport && titleSectionInViewportCount === 1}
        timeout={1500}
        classNames="silde-down"
      >
        <div className="title-section" ref={titleSectionRef}>
          <h2 className="heading">Discover Our Story</h2>
          <div className="line"></div>
          <p className="text-gray">
            VILLA AZZUR EXUDES AN ATMOSPHERE REMINISCENT OF SOUTH OF FRANCE
            MEETS PARISIAN GLAMOUR LOCATED AT BANANI
          </p>
        </div>
      </CSSTransition>

      <div className="middle-section">
        <CSSTransition
          in={imagesSectioninViewport && imagesSectioninViewportCount === 1}
          timeout={1500}
          classNames="slide-right"
        >
          <div className="images-section" ref={imagesSectionRef}>
            <div className="about-image-1">
              <Image src="/about1.jpg" alt="About 1" layout="fill" />
            </div>
            <div className="about-image-2">
              <Image src="/about2.jpg" alt="About 2" layout="fill" />
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={textSectionInViewport && textSectionInViewportCount === 1}
          timeout={1500}
          classNames="slide-left"
        >
          <div className="text-section" ref={textSectionRef}>
            <h2 className="p-heading">Our History</h2>
            <p className="about-paragraph">
              VILLA AZZUR EXUDES AN ATMOSPHERE REMINISCENT OF SOUTH OF FRANCE
              MEETS PARISIAN GLAMOUR LOCATED AT BANANI. PERFECT FOR ANY SPECIAL
              OCCASION, PRIVATE AND GROUP DINING, OR ROMANTIC DINNER, VILLA AZUR
              IS A TOUCH OF CLASS INFUSED WITH DECADENCE
            </p>
            <div className="signature-img">
              <Image
                src="/sign.png"
                width="180px"
                height="100%"
                alt="Signature"
              />
            </div>
          </div>
        </CSSTransition>
      </div>
      <div className="last-section">
        <CSSTransition
          in={lastSectionTextInViewport && lastSectionTextInViewportCount === 1}
          timeout={1500}
          classNames="slide-right"
        >
          <div className="text-section" ref={lastSectionTextRef}>
            <h2 className="p-heading">Our Restaurant</h2>
            <p className="paragraph-1">
              PERFECT FOR ANY SPECIAL OCCASION, PRIVATE AND GROUP DINING, OR
              ROMANTIC DINNER, VILLA AZUR IS A TOUCH OF CLASS INFUSED WITH
              DECADENCE
            </p>
            <p className="paragraph-2">
              If you have any questions, we are here to support you 24/7. We do
              our best to make your life happier and easier! See you soon!
            </p>
            <div className="time-section">
              <time className="week">Monday — Sunday</time>
              <time className="time">12 pm — 11 pm</time>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={
            lastSectionImageInViewport && lastSectionImageInViewportCount === 1
          }
          timeout={1500}
          classNames="slide-left"
        >
          <div className="images-section" ref={lastSectionImageRef}>
            <div className="about-image-3">
              <Image src="/about3.jpg" alt="About 1" layout="fill" />
            </div>
            <div className="about-image-4">
              <Image src="/about4.jpg" alt="About 2" layout="fill" />
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default About;
