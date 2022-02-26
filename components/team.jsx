import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram
} from "react-icons/fa";

function Team() {
  return (
    <div className="team-section" id="team">
      <div className="heading">Meet Our Team</div>
      <div className="line"></div>
      <p className="text-gray">Sed arcu. Cras consequat.</p>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={4}
      >
        <SwiperSlide>
          <div className="person-card">
            <div className="person-img">
              <Image src="/mem1.jpg" alt="Mem 1" layout="fill" />
            </div>
            <h2 className="person-name">James Evans</h2>
            <div className="designation">Cook</div>
            <div className="line"></div>
            <div className="text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              eligendi odio tempora iste.
            </div>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="person-card">
            <div className="person-img">
              <Image src="/mem1.jpg" alt="Mem 1" layout="fill" />
            </div>
            <h2 className="person-name">James Evans</h2>
            <div className="designation">Cook</div>
            <div className="line"></div>
            <div className="text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              eligendi odio tempora iste.
            </div>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="person-card">
            <div className="person-img">
              <Image src="/mem1.jpg" alt="Mem 1" layout="fill" />
            </div>
            <h2 className="person-name">James Evans</h2>
            <div className="designation">Cook</div>
            <div className="line"></div>
            <div className="text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              eligendi odio tempora iste.
            </div>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="person-card">
            <div className="person-img">
              <Image src="/mem1.jpg" alt="Mem 1" layout="fill" />
            </div>
            <h2 className="person-name">James Evans</h2>
            <div className="designation">Cook</div>
            <div className="line"></div>
            <div className="text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              eligendi odio tempora iste.
            </div>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="person-card">
            <div className="person-img">
              <Image src="/mem1.jpg" alt="Mem 1" layout="fill" />
            </div>
            <h2 className="person-name">James Evans</h2>
            <div className="designation">Cook</div>
            <div className="line"></div>
            <div className="text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              eligendi odio tempora iste.
            </div>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Team;
