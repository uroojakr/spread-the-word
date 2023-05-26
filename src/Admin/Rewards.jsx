import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const rewardsData = [
  { id: 1, title: "Reward 1", status: "collected" },
  { id: 2, title: "Reward 2", status: "collected" },
  { id: 3, title: "Reward 3", status: "pending" },
];

const Rewards = () => {
  const collectedRewards = rewardsData.filter(
    (reward) => reward.status === "collected"
  );
  const pendingRewards = rewardsData.filter(
    (reward) => reward.status === "pending"
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Rewards
      </Typography>

      <Typography variant="h6" gutterBottom>
        Collected Rewards
      </Typography>
      <Grid container spacing={2}>
        {collectedRewards.map((reward) => (
          <Grid item xs={12} sm={6} md={4} key={reward.id}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">{reward.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: Collected
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom mt={4}>
        Pending Rewards
      </Typography>
      <Grid container spacing={2}>
        {pendingRewards.map((reward) => (
          <Grid item xs={12} sm={6} md={4} key={reward.id}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">{reward.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: Pending
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Rewards;
