import React, {useRef, useState, useEffect} from "react";
import * as PropTypes from "prop-types";
import Icon from "@/components/baseComponents/gui/icon/Icon";
import {Swiper, SwiperSlide} from "swiper/react";
import {safeHTML} from "@/utils/safeHTML";
import {Navigation, Pagination} from "swiper";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function CarouselInCarousel({lists, listImages, name}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeType, setActiveType] = useState(lists[0].type);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiper = document.querySelector(".carousel__box").swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveType(lists[currentIndex].type);
  };

  return (
    <div className={"carousel"}>
      <h1 className={"carousel__title"}>Carousel in carousel</h1>
      <Swiper
        className={"carousel__box"}
        slidesPerView={1}
        loop
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
      >
        {lists.map(({subtitle, text, type}, index) => (
          <SwiperSlide key={index + 1}>
            <div className={`carousel__item carousel__item_${index + 1}`} key={index}>
              <h2 className={"carousel__subtitle"}>{safeHTML(subtitle)}</h2>
              <p className={"carousel__text"}>{safeHTML(text)}</p>

              <Swiper
                className={"carousel__images-container"}
                direction={"vertical"}
                slidesPerView={1}
                loop
                pagination={{clickable: true}}
                modules={[Pagination]}
              >
                {listImages[type]?.map((item, id) => (
                  <SwiperSlide key={id + 1}>
                    <div className={`carousel__image carousel__image_${id + 1}`} key={id}>
                      <Picture {...item.image} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={"carousel__button carousel__button_prev"} ref={prevRef}>
        <Icon name={name}/>
      </div>
      <div className={"carousel__button carousel__button_next"} ref={nextRef}>
        <Icon name={name}/>
      </div>
    </div>
  );
}

CarouselInCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
