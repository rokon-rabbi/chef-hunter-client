import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="md:px-10 px-4 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className=" ">
          <img
            className="relative rounded"
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          <p className="absolute inset-1 text-orange-400 text-center z-20 md:m-20 m-6 md:text-3xl">
            {" "}
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
          </p>
          <p className="absolute inset-1 text-white font-bold text-center z-20 md:m-56 m-12 md:text-4xl">
            Samossa
          </p>
          <p className="absolute inset-1 text-white f text-center z-20 md:m-72 m-20 text-xs md:text-xl">
            A handful of simple ingredients typify the fresh, vibrant flavors of
            indian cooking.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative rounded"
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          <p className="absolute inset-1 text-orange-400 text-center z-20 md:m-20 m-6 md:text-3xl">
            {" "}
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
          </p>
          <p className="absolute inset-1 text-white font-bold text-center z-20 md:m-56 m-12 md:text-4xl">
            Paneer Paratha
          </p>
          <p className="absolute inset-1 text-white f text-center z-20 md:m-72 m-20 text-xs md:text-xl">
            A handful of simple ingredients typify the fresh, vibrant flavors of
            indian cooking.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" relative rounded"
            src="https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          <p className="absolute inset-1 text-orange-400 text-center z-20 md:m-20 m-6 md:text-3xl">
            {" "}
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
          </p>
          <p className="absolute inset-1 text-white font-bold text-center z-20 md:m-56 m-12 md:text-4xl">
            Paneer Bhatura
          </p>
          <p className="absolute inset-1 text-white f text-center z-20 md:m-72 m-20 text-xs md:text-xl">
            A handful of simple ingredients typify the fresh, vibrant flavors of
            indian cooking.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative rounded"
            src="https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          <p className="absolute inset-1 text-orange-400 text-center z-20 md:m-20 m-6 md:text-3xl">
            {" "}
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
          </p>
          <p className="absolute inset-1 text-white font-bold text-center z-20 md:m-56 m-12 md:text-4xl">
            Kuska Biryani
          </p>
          <p className="absolute inset-1 text-white f text-center z-20 md:m-72 m-20 text-xs md:text-xl">
            A handful of simple ingredients typify the fresh, vibrant flavors of
            indian cooking.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative rounded"
            src="https://images.unsplash.com/photo-1628294896516-344152572ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          <p className="absolute inset-1 text-orange-400 text-center z-20 md:m-20 m-6 md:text-3xl">
            {" "}
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
            <AiFillStar className="inline" />
          </p>
          <p className="absolute inset-1 text-white font-bold text-center z-20 md:m-56 m-12 md:text-4xl">
            Payyoli Chicken Fry
          </p>
          <p className="absolute inset-1 text-white f text-center z-20 md:m-72 m-20 text-xs md:text-xl">
            A handful of simple ingredients typify the fresh, vibrant flavors of
            indian cooking.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
