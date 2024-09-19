import React from 'react';
import PageDescription from "../components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "../constants/page-description";
import TestSwiper from "@/components/testSwiper/TestSwiper";
import {carouselContent, exampleContent, oneControlsContent, testSwiperContent, verticalSwiperContent} from "@/constants/copyright";
import VerticalSwiper from "@/components/verticalSwiper/VerticalSwiper";
import CarouselInCarousel from "@/components/carouselInCarousel/CarouselInCarousel";
import OneControls from "@/components/oneControls/OneControls";
import Example from "@/components/example/Example";


export default function Home() {

  return (
    <div className="container">
      <PageDescription {...defaultPage}/>
      <TestSwiper {...testSwiperContent}/>
      <VerticalSwiper {...verticalSwiperContent}/>
      <CarouselInCarousel {...carouselContent}/>
      <OneControls {...oneControlsContent}/>
      <Example {...exampleContent}/>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
