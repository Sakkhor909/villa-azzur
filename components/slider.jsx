import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function Slider() {
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="slideText image1">
          <div className="text-1">Enjoy Our Food</div>
          <div className="text-2">Only the best ingredients for our dishes</div>
        </SwiperSlide>
        <SwiperSlide className="slideText image2">
          <div className="text-1">Elegant Interior and Design</div>
          <div className="text-2">High-class Professional Service</div>
        </SwiperSlide>
        <SwiperSlide className="slideText image3">
          <div className="text-1">Tradition & Passion</div>
          <div className="text-2">Only the best ingredients for our dishes</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
