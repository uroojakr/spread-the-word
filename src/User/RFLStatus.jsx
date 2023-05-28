import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import rfls from "../User/rflData";
import CustomButton from "../Components/Buttons";
import ChatBox from "./ChatBox"; 

const useStyles = makeStyles({
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "16px",
    marginTop: "16px",
  },
  card: {
    height: "120%",
    backgroundColor: "#f0f0f0",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  applyButton: {
    marginTop: "auto",
  },
});

function RFLStatus() {
  const classes = useStyles();
  const [chatBoxVisible, setChatBoxVisible] = useState(false);

  const handleOpenChatBox = () => {
    setChatBoxVisible(true);
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        RFL Status
      </Typography>
      <Box className={classes.cardContainer}>
        {rfls.map((rfl) => (
          <Card key={rfl.id} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" component="h2">
                {rfl.organization}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Applied Date: {rfl.appliedDate}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Post: {rfl.post}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Last Date to Apply: {rfl.lastDateToApply}
              </Typography>
              <Link
                href={rfl.visitWebsiteForInfo}
                target="_blank"
                rel="noopener"
              >
                Visit Website for Info
              </Link>
              <Typography variant="body2" color="textSecondary">
                Salary: {rfl.salary}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Requirements: {rfl.requirements}
              </Typography>
              <CustomButton
                label={"Message Sponsor"}
                onClick={handleOpenChatBox}
                disabled={chatBoxVisible} 
              />
              <Box mt={5} />
            </CardContent>
          </Card>
        ))}
      </Box>
      {chatBoxVisible && <ChatBox />}{" "}
     
    </div>
  );
}

export default RFLStatus;
