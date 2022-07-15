/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { Suspense } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";

import ModelCanvas from "./ModelCanvas";
import Chair from "../models/Chair";
import Table from "../models/Table";
import Desk from "../models/Desk";
import Bed from "../models/Bed";

import "react-multi-carousel/lib/styles.css";

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
    { component: Chair, position: [0, 0, 0] },
    { component: Table, position: [0, 0, 0] },
    { component: Desk, position: [0, 0, 0] },
    { component: Bed, position: [0, 0, 0] },
  ];

  return (
    <ModelCarouselLayout>
      <Carousel
        responsive={responsive}
        // autoPlay="true"
        // autoPlaySpeed={2000}
        infinite
        showDots
      >
        <div>
          <Suspense fallback={null}>
            <ModelCanvas index={0}>
              <Chair position={[0, 0, 0]} />
            </ModelCanvas>
          </Suspense>
        </div>
        <div>
          <Suspense fallback={null}>
            <ModelCanvas index={1}>
              <Table position={[0, -0.45, 0]} />
            </ModelCanvas>
          </Suspense>
        </div>
        <div>
          <Suspense fallback={null}>
            <ModelCanvas index={2}>
              <Desk position={[0, -1.5, 0]} />
            </ModelCanvas>
          </Suspense>
        </div>
        {/* <div>
          <Suspense fallback={null}>
            <ModelCanvas index={3}>
              <Bed position={[0, -2, 0]} />
            </ModelCanvas>
          </Suspense>
        </div> */}
      </Carousel>
    </ModelCarouselLayout>
  );
}

export default ModelCarousel;
