import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="rounded-2xl">
      <Swiper
        className="rounded-2xl"
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>
          <div className="slide slide1 "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2 "></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slide slide3 "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
