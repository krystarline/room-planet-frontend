/* eslint-disable react/no-unescaped-entities */

import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSetAtom } from "jotai";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";

import { colorAtom, toolAtom } from "../atoms";

const style = {
  display: "grid",
  gap: "5%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ModelCarouselLayout = styled.div`
  height: 70vh;
  overflow: hidden;
`;

function PlanGuide() {
  const [open, setOpen] = useState(false);
  const setColor = useSetAtom(colorAtom);
  const setTool = useSetAtom(toolAtom);

  const handleOpen = () => {
    setColor((prevColor) => ({ ...prevColor, current: null }));
    setTool({ type: null });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="default"
        aria-label="planguide-modal"
        title="Guide"
        sx={{ mr: 2 }}
        onClick={handleOpen}
      >
        <HelpIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            align="center"
          >
            Let's display your room! 🎨
          </Typography>
          <Divider />
          <ModelCarouselLayout>
            <Carousel responsive={responsive} showDots>
              <div>
                <img
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src="/1-render-models.gif"
                  alt="Render Models"
                />
              </div>
              <div>
                <img
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src="/2-drag-and-rotate-model.gif"
                  alt="Drag and Rotate Model"
                />
              </div>
              <div>
                <img
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src="/3-colorpick-model.gif"
                  alt="Colorpick Model"
                />
              </div>
            </Carousel>
          </ModelCarouselLayout>
        </Box>
      </Modal>
    </div>
  );
}

export default PlanGuide;
