/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { Suspense } from "react";
import { useAtom } from "jotai";
import styled from "styled-components";
import Carousel from "react-multi-carousel";

import { modelsAtom } from "../common/atom";
import ModelCanvas from "./ModelCanvas";

import Chair from "../models/Chair";
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
  const [models] = useAtom(modelsAtom);

  return (
    <ModelCarouselLayout>
      <Carousel
        responsive={responsive}
        // autoPlay="true"
        // autoPlaySpeed={2000}
        infinite
        showDots
      >
        {/* {models.map((model, index) => (
          <div key={index}>
            <Suspense fallback={null}>
              <ModelCanvas index={index}>
                <Chair />
              </ModelCanvas>
            </Suspense>
          </div>
        ))} */}
        <div>
          <Suspense fallback={null}>
            <ModelCanvas index={0}>
              <Chair />
            </ModelCanvas>
          </Suspense>
        </div>
        <div>
          <Suspense fallback={null}>
            <ModelCanvas index={1}>
              <Bed />
            </ModelCanvas>
          </Suspense>
        </div>
        {/* <Suspense fallback={null}>
          <ModelCanvas>
            <Chair onDoubleClick={handleOnDoubleClick} />
          </ModelCanvas>
          <div>침대</div>
          <div>책상</div>
          <div>옷장</div>
          <div>테이블</div>
        </Suspense> */}
      </Carousel>
    </ModelCarouselLayout>
  );
}

export default ModelCarousel;
