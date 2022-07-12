/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import styled from "styled-components";

import Carousel from "react-multi-carousel";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";

const style = {
  display: "grid",
  gap: "5%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
  height: 40vh;
  /* outline-style: auto; */
  overflow: hidden;
`;

function PlanGuide() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="default"
        aria-label="planguide-modal"
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
          {/* <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            align="center"
          >

          </Typography> */}
          <Divider />
          <ModelCarouselLayout>
            <Carousel responsive={responsive} infinite showDots>
              <div>item1</div>
              <div>item2</div>
              <div>item3</div>
            </Carousel>
          </ModelCarouselLayout>
        </Box>
      </Modal>
    </div>
  );
}

export default PlanGuide;
