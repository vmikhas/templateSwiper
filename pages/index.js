import React from 'react';
import PageDescription from "../components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "../constants/page-description";
import TestSwiper from "@/components/testSwiper/TestSwiper";
import {
  carouselContent,
  exampleContent,
  loginModalContent,
  oneControlsContent,
  testSwiperContent, userNameContent,
  verticalSwiperContent
} from "@/constants/copyright";
import VerticalSwiper from "@/components/verticalSwiper/VerticalSwiper";
import CarouselInCarousel from "@/components/carouselInCarousel/CarouselInCarousel";
import OneControls from "@/components/oneControls/OneControls";
import Example from "@/components/example/Example";
import LoginModal from "@/components/loginModal/LoginModal";
import UserName from "@/components/userName/UserName";


export default function Home() {

  return (
    <div className="container">
      {/*<PageDescription {...defaultPage}/>*/}
      {/*<TestSwiper {...testSwiperContent}/>*/}
      {/*<VerticalSwiper {...verticalSwiperContent}/>*/}
      {/*<CarouselInCarousel {...carouselContent}/>*/}
      {/*<OneControls {...oneControlsContent}/>*/}
      {/*<Example {...exampleContent}/>*/}
      <LoginModal {...loginModalContent}/>
      <UserName {...userNameContent}/>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
