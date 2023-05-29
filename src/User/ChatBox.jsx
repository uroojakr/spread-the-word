import React from "react";
import { Box, Button, Typography } from "@mui/material";

function ChatBox({ onClose }) {
  return (
    <Box
      position="fixed"
      bottom={20}
      right={20}
      width={300}
      height={200}
      backgroundColor="#f0f0f0"
      padding={2}
      boxShadow={3}
      borderRadius={4}
    >
      <Typography variant="h6" gutterBottom>
        Chat Box
      </Typography>
      <Typography variant="body2">
        This is a small chat box component.
      </Typography>
      {/* <Button
        onClick={onClose}
        variant="contained"
        color="primary"
        size="small"
      >
        Close
      </Button> */}
    </Box>
  );
}

export default ChatBox;
