import React, { useRef, useEffect } from "react";
import * as PropTypes from "prop-types";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Icon from "@/components/baseComponents/gui/icon/Icon";
import "swiper/css";
import "swiper/css/pagination";

export default function TestSwiper({ images, name }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiperEl = document.querySelector('.test-swiper__box').swiper;
    if (swiperEl && prevRef.current && nextRef.current) {
      swiperEl.params.navigation.prevEl = prevRef.current;
      swiperEl.params.navigation.nextEl = nextRef.current;
      swiperEl.navigation.init();
      swiperEl.navigation.update();
    }
  }, []);

  return (
    <div className={"test-swiper"}>
      <h2 className={"test-swiper__title"}>Swiper default</h2>

      <Swiper
        className={"test-swiper__box"}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        {images.map((item, id) => (
          <SwiperSlide key={id}>
            <div className={`test-swiper__image test-swiper__image_${id + 1}`} key={id}>
              <Picture {...item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={"test-swiper__button test-swiper__button_prev"} ref={prevRef}>
        <Icon name={name} />
      </div>
      <div className={"test-swiper__button test-swiper__button_next"} ref={nextRef}>
        <Icon name={name} />
      </div>
    </div>
  );
}

TestSwiper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};
