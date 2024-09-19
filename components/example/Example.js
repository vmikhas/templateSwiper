import React, {useEffect, useRef, useState} from "react";
import * as PropTypes from "prop-types";
import Carousel from "@/components/baseComponents/gui/carousel/Carousel";
import ExampleImage from "@/components/example/ExampleImage";
import Icon from "@/components/baseComponents/gui/icon/Icon";
import ReactPaginate from "react-paginate";
import {settings} from "@/constants/carousel-settings";


export default function Example({images, name}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = ({selected}) => {
    setActiveSlide(selected);
  };

  return (
    <div className={"example"}>
      <h1 className={"example__title"}>Example</h1>
      <Carousel
        item={ExampleImage}
        itemsData={images}
        selectedSlide={activeSlide}
        settings={{
          ...settings.default,
          ...{
            loop: false,
            navigation: {
              prevEl: ".example__button_prev",
              nextEl: ".example__button_next",
            },
            onSlideChange(swiper) {
              setActiveSlide(swiper.realIndex)
            }
          }
        }}
      />
      {images?.length > 1 && <div className={"example__button example__button_prev"}>
          <Icon name={name}/>
      </div>}
      {images?.length > 1 && <div className={"example__button example__button_next"}>
        <Icon name={name}/>
      </div>}

      {images?.length > 1 &&
        <ReactPaginate
          className={"example__pagination"}
          pageClassName={"example__pagination-item"}
          activeClassName={"example__pagination-item_active"}
          previousClassName={"example__pagination-item example__pagination-item_prev"}
          nextClassName={"example__pagination-item example__pagination-item_next"}
          pageLinkClassName={"example__pagination-link"}
          previousLinkClassName={"example__pagination-link"}
          nextLinkClassName={"example__pagination-link"}
          pageCount={images.length}
          previousLabel={"Назад"}
          nextLabel={"Вперед"}
          breakLabel={"..."}
          forcePage={activeSlide}
          onPageChange={handleSlideChange}
        />
      }
    </div>
  );
}
Example.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
