import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

function Slider() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <Image src="/food1.jpg" alt="Slider image" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/food2.jpg" alt="Slider image" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/food6.jpg" alt="Slider image" layout="fill" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
