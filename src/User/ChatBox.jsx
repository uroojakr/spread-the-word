import React, { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Render nothing if the chat box is closed
  }

  return (
    <Box
      position="fixed"
      bottom={20}
      right={20}
      width={300}
      height={300}
      backgroundColor="#f0f0f0"
      padding={2}
      boxShadow={3}
      borderRadius={4}
    >
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" gutterBottom>
        Chat Box
      </Typography>
      <Typography variant="body2" gutterBottom>
        This is a small chat box component.
      </Typography>
      <TextField
        id="chat-message"
        label="Type your message"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
      />
    </Box>
  );
}

export default ChatBox;
