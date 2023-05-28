import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import rflLinkData from "../User/rflLinkData.json";

function ReferralUserDashboard() {
  const [totalReferrals, setTotalReferrals] = useState(rflLinkData.length);
  const [totalEarned, setTotalEarned] = useState(500);
  const [disabledReferrals, setDisabledReferrals] = useState([]);

  const handleReferToFriend = (referral) => {
    // Add logic to handle the referral to a friend
    console.log("Referring to friend:", referral);

    // Update total earned
    setTotalEarned((prevTotalEarned) => prevTotalEarned + 500);

    // Disable the referred button
    setDisabledReferrals((prevDisabledReferrals) => [
      ...prevDisabledReferrals,
      referral.id,
    ]);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Referral User Dashboard
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" color="textSecondary">
              Total Referrals: {totalReferrals}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Total Earned: {totalEarned} rps
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Box mt={2}>
        {rflLinkData.map((referral) => (
          <Card key={referral.id} style={{ marginBottom: "16px" }}>
            <CardContent>
              <Typography variant="h6" component="h2">
                {referral.organization}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Post: {referral.post}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Last Date to Apply: {referral.lastDateToApply}
              </Typography>
              <Button
                sx={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                }}
                variant="contained"
                color="primary"
                disabled={disabledReferrals.includes(referral.id)}
                onClick={() => handleReferToFriend(referral)}
              >
                {disabledReferrals.includes(referral.id)
                  ? "Referred"
                  : "Refer and Earn 500 rps"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default ReferralUserDashboard;
