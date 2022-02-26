import Image from "next/image";
function About() {
  return (
    <div className="about-section" id="about">
      <h2 className="heading">Discover Our Story</h2>
      <div className="line"></div>
      <p className="text-gray">
        VILLA AZZUR EXUDES AN ATMOSPHERE REMINISCENT OF SOUTH OF FRANCE MEETS
        PARISIAN GLAMOUR LOCATED AT BANANI
      </p>
      <div className="middle-section">
        <div className="images-section">
          <div className="about-image-1">
            <Image src="/about1.jpg" alt="About 1" layout="fill" />
          </div>
          <div className="about-image-2">
            <Image src="/about2.jpg" alt="About 2" layout="fill" />
          </div>
        </div>
        <div className="text-section">
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
      </div>
      <div className="last-section">
        <div className="text-section">
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

        <div className="images-section">
          <div className="about-image-3">
            <Image src="/about3.jpg" alt="About 1" layout="fill" />
          </div>
          <div className="about-image-4">
            <Image src="/about4.jpg" alt="About 2" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
