/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ModelCanvas from "../ModelCanvas/index";

// import { Canvas } from "@react-three/fiber";
// import { PhysicsProvider } from "@react-three/cannon/dist/physics-provider";

// import Box from "./Box";

const ModelCarouselLayout = styled.div`
  height: 20vh;
  overflow: hidden;
`;

// const CustomDot = styled(Carousel)`
//   .showDots li button {
//     // <CustomDot />
//     background-color: rgb(139, 0, 0);
//   }
// `;

// function CustomRightArrow({ onClick, ...rest }) {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType },
//   } = rest;

//   return <button onClick={() => onClick()} />;
// }

function ModelCarousel() {
  // const [models, setModels] = useState([
  //   "Modern_TV_Rack-01.gltf",
  //   "Modern_TV_Rack-01.gltf",
  //   "Modern_TV_Rack-01.gltf",
  // ]);
  // const [models, setModels] = useAtom(modelsAtom);

  // console.log(`ModelCarousel: '${models}' Type: ${typeof models}`);

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

  return (
    <ModelCarouselLayout>
      {/* <CarouselWrapper> */}
      <Carousel
        responsive={responsive}
        autoPlay="true"
        autoPlaySpeed={2000}
        showDots="true"
        // customRightArrow={<CustomRightArrow />}
      >
        {/* <Suspense fallback={null}> */}
        {/* {models.map((file, index) => (
          <Fragment key={index}>
            <ModelCanvas file={file} />
          </Fragment>
        ))} */}
        <div>
          <ModelCanvas />
        </div>
        <div>
          <ModelCanvas />
        </div>
        <div>
          <ModelCanvas />
        </div>
        <div>
          <ModelCanvas />
        </div>
        <div>
          <ModelCanvas />
        </div>
        <div>
          <ModelCanvas />
        </div>
        {/* </Suspense> */}
      </Carousel>
      {/* </CarouselWrapper> */}
    </ModelCarouselLayout>
  );
}

export default ModelCarousel;
