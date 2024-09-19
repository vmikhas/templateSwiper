import React, {useRef, useState, useEffect} from "react";
import * as PropTypes from "prop-types";
import Icon from "@/components/baseComponents/gui/icon/Icon";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import {safeHTML} from "@/utils/safeHTML";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import ReactPaginate from "react-paginate";

export default function OneControls({lists, desc, images, name}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const mainSwiper = document.querySelector(".one-controls__container").swiper;
      mainSwiper.params.navigation.prevEl = prevRef.current;
      mainSwiper.params.navigation.nextEl = nextRef.current;
      mainSwiper.navigation.init();
      mainSwiper.navigation.update();
    }
  }, [thumbsSwiper]);

  return (
    <div className={"one-controls"}>
      <h1 className={"carousel__title"}>One Controls</h1>

      <Swiper
        className={"one-controls__container"}
        slidesPerView={1}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        thumbs={{swiper: thumbsSwiper}}
        modules={[Navigation, Thumbs]}
      >
        {lists.map(({subtitle, text}, index) => (
          <SwiperSlide key={index + 1}>
            <div className={`carousel__item carousel__item_${index + 1}`} key={index}>
              <div className={"carousel__content-container"}>
                <h2 className={"carousel__subtitle"}>{safeHTML(subtitle)}</h2>
                <p className={"carousel__text"}>{safeHTML(text)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className={"one-controls__desc"}>{safeHTML(desc)}</p>

      <Swiper
        className={"one-controls__box"}
        slidesPerView={1}
        loop
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`one-controls__image one-controls__image_${index + 1}`} key={index}>
              <Picture {...item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={"one-controls__button one-controls__button_prev"} ref={prevRef}>
        <Icon name={name}/>
      </div>
      <div className={"one-controls__button one-controls__button_next"} ref={nextRef}>
        <Icon name={name}/>
      </div>
    </div>
  );
}

OneControls.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
