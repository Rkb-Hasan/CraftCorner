import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="rounded-2xl ">
      <div className="lg:text-4xl text-2xl bg-slate-400bg-opacity-80 border-2 rounded-2xl p-3 mb-4 font-bold text-center">
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
          <div className="slide slide1 ">
            <p className="bg-black text-[#6cef5b]  bg-opacity-90 border-2 p-2 w-[80%] mx-auto rounded-2xl flex flex-col lg:gap-5 md:gap-3 gap-2">
              <span className=" text-center lg:text-2xl text-xl font-bold">
                {" "}
                Watercolor painting is a delicate art form where pigments
                suspended in water create translucent layers, known for its
                fluidity and luminosity.
              </span>
              <span className=" text-center lg:text-xl md:text-base text-sm text-[#a667ed]  font-semibold">
                {" "}
                Buy Our Water-color paintings in a very low range of price!!
              </span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2 ">
            {" "}
            <p className="bg-black text-[#6cef5b]  bg-opacity-80 border-2 lg:px-6 md:px-4 p-2 lg:py-4 md:py-3 w-[80%] mx-auto rounded-2xl flex flex-col gap-2">
              <span className=" text-center lg:text-2xl text-xl font-bold">
                {" "}
                Cartoon drawing is a playful and simplified art form,
                characterized by exaggerated features, vibrant colors, and
                whimsical expressions, often used to convey humor or narrative
                storytelling.
              </span>
              <span className=" text-center lg:text-xl md:text-base text-sm text-[#a667ed] font-semibold">
                {" "}
                Buy Our Cartoon drawings paintings in a very low range of
                price!!
              </span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slide slide3 ">
            {" "}
            <p className="bg-black text-[#6cef5b] bg-opacity-80 border-2 p-2 w-[80%] mx-auto rounded-2xl flex flex-col gap-2">
              <span className=" text-center lg:text-2xl text-xl font-bold">
                {" "}
                Charcoal sketching is a versatile medium characterized by rich,
                deep blacks and expressive lines, allowing for dramatic
                contrasts and dynamic compositions.
              </span>
              <span className=" text-center lg:text-xl md:text-base text-sm text-[#a667ed] font-semibold">
                {" "}
                Buy Our Charcoal sketchings in a very low range of price!!
              </span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4">
            {" "}
            <p className="bg-black text-[#6cef5b] bg-opacity-80 border-2 p-2 w-[80%] mx-auto rounded-2xl flex flex-col gap-2">
              <span className=" text-center lg:text-2xl text-xl font-bold">
                {" "}
                Oil painting involves the use of pigments suspended in oil as a
                medium, allowing for rich colors, blending capabilities, and
                depth, often recognized for its luminosity and longevity.
              </span>
              <span className=" text-center lg:text-xl md:text-base text-sm text-[#a667ed]  font-semibold">
                {" "}
                Buy Our Oil paintings in a very low range of price!!
              </span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
