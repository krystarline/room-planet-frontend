/* eslint-disable react/no-array-index-key */
import React, { Suspense, createElement } from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";

import {
  ArmChair,
  Bed,
  Cabinet,
  Chair,
  Desk,
  Hanger,
  LeatherChair,
  Pouf,
  Shelf,
  Sofa,
  Table,
} from "../models";
import ModelCanvas from "./ModelCanvas";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ModelCarouselLayout = styled.div`
  height: 20vh;
  overflow: hidden;
`;

function ModelCarousel() {
  const furniture = [
    { component: Chair, props: { position: [0, 0, 0] } },
    { component: Table, props: { position: [0, -1.5, 0] } },
    { component: Bed, props: { position: [0, -1.5, 0] } },
    { component: Desk, props: { position: [0, -1.5, 0] } },
    { component: Pouf, props: { position: [0, 0, 0] } },
    { component: LeatherChair, props: { position: [0, -1.5, 0] } },
    { component: Sofa, props: { position: [0, -0.5, 0] } },
    { component: ArmChair, props: { position: [0, 0, 0] } },
    { component: Shelf, props: { position: [0, -2, 0] } },
    { component: Hanger, props: { position: [0, -2.5, 0] } },
    { component: Cabinet, props: { position: [0, -1.5, 0] } },
  ];

  return (
    <ModelCarouselLayout>
      <Carousel responsive={responsive} showDots>
        {furniture.map(({ component, props }, index) => (
          <div key={index}>
            <Suspense fallback={null}>
              <ModelCanvas index={index}>
                {createElement(component, { ...props })}
              </ModelCanvas>
            </Suspense>
          </div>
        ))}
      </Carousel>
    </ModelCarouselLayout>
  );
}

export default ModelCarousel;
