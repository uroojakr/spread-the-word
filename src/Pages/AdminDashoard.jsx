import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReferrals } from "../Redux/referralSlice";
import { Typography, Box, Card, CardContent } from "@mui/material";

function AdminDashboard() {
  const dispatch = useDispatch();
  const referrals = useSelector((state) => state.referrals);

  useEffect(() => {
    dispatch(fetchReferrals());
  }, [dispatch]);

  const totalReferrals = referrals.length;
  const totalReferralsApplied = referrals.filter(
    (referral) => referral.status === "Applied"
  ).length;
  const totalReferralsPending = referrals.filter(
    (referral) => referral.status === "Pending"
  ).length;

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Box sx={{ display: "flex", gap: "24px" }}>
        <Card sx={{ flexGrow: 1, minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Total Referrals
            </Typography>
            <Typography variant="h3" component="div" color="primary">
              {totalReferrals}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flexGrow: 1, minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Referrals Applied
            </Typography>
            <Typography variant="h3" component="div" color="primary">
              {totalReferralsApplied}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flexGrow: 1, minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Referrals Pending
            </Typography>
            <Typography variant="h3" component="div" color="primary">
              {totalReferralsPending}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default AdminDashboard;
