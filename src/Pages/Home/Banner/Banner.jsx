import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="rounded-2xl ">
      <div className="lg:text-4xl text-2xl bg-slate-400 bg-opacity-10 border-2 rounded-2xl p-3 mb-4 font-bold text-center">
        <Typewriter
          cursor={true}
          cursorBlinking={true}
          delaySpeed={1000}
          deleteSpeed={20}
          loop={0}
          typeSpeed={50}
          words={["Eat !", "Sleep !", "Buy Art & Crafts !", "Repeat !"]}
        />
      </div>

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
