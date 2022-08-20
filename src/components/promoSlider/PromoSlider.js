import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./PromoSlider.css";

const PromoSlider = () => {
  const promos = [
    "https://user-images.githubusercontent.com/63796774/185748885-4d3ca56d-a835-4288-b212-9ab685918cc3.jpg",
    "https://user-images.githubusercontent.com/63796774/185748661-7a5b2fc9-08e6-4001-be20-bcee0bd0c7f8.png",
    "https://user-images.githubusercontent.com/63796774/185749034-26ba0223-ed5e-4f27-a3db-7849b8ad917d.jpg",
    "https://user-images.githubusercontent.com/63796774/185749366-804d5e97-2c6e-467b-b805-d052e5cd25a7.jpg",
    "https://user-images.githubusercontent.com/63796774/185749430-13c607c8-6647-4f58-b3d5-cbf511b6f63e.jpg",
    "https://user-images.githubusercontent.com/63796774/185749902-6ffefe2a-c0ad-4651-89e1-8359c7cc183d.jpg",
  ];
  return (
    <React.Fragment>
      <div className="promo-slider">
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
          className="mySwiper"
        >
          {promos.map((promo) => (
            <SwiperSlide key={promo}>
              <img src={promo} alt="promo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};
export default PromoSlider;
