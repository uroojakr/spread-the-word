import React from "react";
import {
  Avatar,
  Typography,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  createTheme,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import CustomButton from "../Components/Buttons";

const theme = createTheme({
  overrides: {
    MuiGrid: {
      item: {
        paddingTop: "139px",
      },
    },
  },
});

const useStyles = makeStyles({
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 8,
    textAlign: "left",
  },
  infoContainer: {
    textAlign: "left",
    justifyContent: "center",
  },
  avatarContainer: {
    textAlign: "center",
  },
  updateButton: {
    marginTop: 24,
  },
  cardContainer: {
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
  },
});

function ProfilePage() {
  const classes = useStyles();

  const user = {
    name: "Urooj Akram",
    jobExperience: "1 year",
    appliedReferrals: 10,
    currentJobPost: "Software Engineer",
    location: "Islamabad, Pakistan",
    skills: ["JavaScript", "React", "Node.js"],
    about:
      "Passionate developer with a love for creating innovative solutions.",
  };

  return (
    <Container>
      <Box mt={7} />
      <Grid container justifyContent="center" alignItems="center" spacing={10}>
        <Grid item xs={12} md={10} className={classes.cardContainer}>
          <Card>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                className={classes.infoContainer}
              >
                <Box className={classes.avatarContainer}>
                  <Avatar className={classes.avatar}>
                    <AccountCircle />
                  </Avatar>
                </Box>
                <Typography
                  variant="h5"
                  component="div"
                  className={classes.title}
                >
                  {user.name}
                </Typography>
                <Box sx={{textAlign: "left"}}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  <strong>Job Experience:</strong> {user.jobExperience}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  <strong>Applied Referrals:</strong> {user.appliedReferrals}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  <strong>Current Job Post:</strong> {user.currentJobPost}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  <strong>Location:</strong> {user.location}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  <strong>Skills:</strong> {user.skills.join(", ")}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  <strong>About:</strong> {user.about}
                </Typography>
                </Box>
                <Box mt={2}>
                  <CustomButton label={"Update Profile"} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProfilePage;
