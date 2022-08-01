import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Chatapp from "../../img/chatapp.png";
import Weather from "../../img/weather.png";
import Amazon from "../../img/amazon1.png";
import Restaurant from "../../img/restaurant.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Chatapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Weather} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Amazon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Restaurant} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
