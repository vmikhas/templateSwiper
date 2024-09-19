import React, {useEffect, useRef, useState} from "react";
import * as PropTypes from "prop-types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Icon from "@/components/baseComponents/gui/icon/Icon";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import ReactPaginate from "react-paginate";


export default function VerticalSwiper({images, name}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiperEl = document.querySelector('.vertical-swiper__box').swiper;
    if (swiperEl && prevRef.current && nextRef.current) {
      swiperEl.params.navigation.prevEl = prevRef.current;
      swiperEl.params.navigation.nextEl = nextRef.current;
      swiperEl.navigation.init();
      swiperEl.navigation.update();
    }
  }, []);

  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  const handlePageClick = (event) => {
    const newPage = event.selected;
    setCurrentPage(newPage);
    if (swiperRef.current) {
      swiperRef.current.slideTo(newPage);
    }
  };

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setCurrentPage(newIndex);
  };

  return (
    <div className={"vertical-swiper"}>
      <h1 className={"vertical-swiper__title"}>Vertical Swiper</h1>

      <Swiper
        className={"vertical-swiper__box"}
        direction="vertical"
        slidesPerView={1}
        loop={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
      >
        {images.map((item, id) => (
          <SwiperSlide key={id + 1}>
            <div className={`vertical-swiper__image vertical-swiper__image_${id + 1}`} key={id + 1}>
              <Picture {...item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={"vertical-swiper__button vertical-swiper__button_prev"} ref={prevRef}>
        <Icon name={name}/>
      </div>
      <div className={"vertical-swiper__button vertical-swiper__button_next"} ref={nextRef}>
        <Icon name={name}/>
      </div>

      <ReactPaginate
        className={"vertical-swiper__pagination"}
        pageClassName={"vertical-swiper__item"}
        pageLinkClassName={"vertical-swiper__link"}
        activeClassName={"vertical-swiper__item_active"}
        previousClassName={"vertical-swiper__item one-controls__item_prev"}
        nextClassName={"vertical-swiper__item one-controls__item_next"}
        pageCount={Math.ceil(images.length / itemsPerPage)}
        previousLabel={"Предыдущий слайд"}
        nextLabel={"Следующий слайд"}
        breakLabel={"..."}
        forcePage={currentPage}
        onPageChange={handlePageClick}
      />
    </div>
  );
}
VerticalSwiper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
