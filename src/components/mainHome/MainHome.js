import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import MainSwiperContent from "./MainSwiper";
import ButtonNav from "../Nav/ButtonNav";
import { ProductMinus10 } from "../Product/Product";
import React from "react";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div className="MainHome">
      <h1>TOP PRODUCTS</h1>
      <div className="mainSwiper">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <MainSwiperContent productId={14} />
          </SwiperSlide>
          <SwiperSlide>
            <MainSwiperContent productId={"asd"}></MainSwiperContent>
          </SwiperSlide>
          <SwiperSlide>
            <MainSwiperContent productId={"asdas"}></MainSwiperContent>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2>HIGHTLIGHTS</h2>
      <div className="container_hightlights">
        <ProductMinus10 />
      </div>
      <Link to="/products">
        <ButtonNav text="View all products" />
      </Link>
    </div>
  );
};

export default MainHome;
