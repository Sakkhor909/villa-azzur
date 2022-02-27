import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useRef, useEffect, useContext } from "react";
import useElementView from "../hooks/useElementView";
import { NavContext } from "../contexts/navContext";
function Slider() {
  const HomeRef = useRef();
  const isVisible = useElementView(HomeRef);
  const [HomeVisibile, setHomeVisibile] = useContext(NavContext);
  useEffect(() => {
    setHomeVisibile(isVisible);
  }, [setHomeVisibile, isVisible]);
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        allowTouchMove={false}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        id="home"
        ref={HomeRef}
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
