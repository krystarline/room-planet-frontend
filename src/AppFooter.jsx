/* eslint-disable no-alert */

import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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

function AppFooter() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCopyClipBoard = async () => {
    await navigator.clipboard.writeText("krystarline@gmail.com");
    alert("이메일 복사가 완료되었습니다!");
  };
  const handleGithubClick = () => {
    window.location.href =
      "https://github.com/krystarline/room-planet-frontend";

    return null;
  };

  return (
    <Container fixed sx={{ display: "flex", height: "100%", padding: "1%" }}>
      <Typography
        variant="body2"
        color="#aba9a6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        © 2022 Room Planet. All rights reserved.
      </Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="email"
        title="Email"
        sx={{ mr: 2 }}
        onClick={handleOpen}
      >
        <EmailIcon />
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
            📨 krystarline@gmail.com
            <IconButton
              size="medium"
              edge="end"
              color="inherit"
              aria-label="text-clipboard"
              title="Copy"
              sx={{ mr: 2 }}
              onClick={handleCopyClipBoard}
            >
              <AttachFileIcon />
            </IconButton>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            align="center"
          >
            Dev. Sujeong Park
          </Typography>
          <Divider />
        </Box>
      </Modal>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="github"
        title="Github"
        sx={{ mr: 2 }}
        onClick={handleGithubClick}
      >
        <GitHubIcon />
      </IconButton>
    </Container>
  );
}

export default AppFooter;
