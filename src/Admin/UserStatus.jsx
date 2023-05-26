import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReferrals } from "../Redux/referralSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function RFL() {
  const dispatch = useDispatch();
  const referrals = useSelector((state) => state.referrals.referrals);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchReferrals());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredReferrals = referrals.filter((referral) =>
    referral.referralCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>User RFL</h1>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ width: 300 }} // Set the width to 300 pixels
      />

      <TableContainer component={Paper}>
        {filteredReferrals.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Referral Code</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredReferrals.map((referral) => (
                <TableRow key={referral.id}>
                  <TableCell>{referral.referralCode}</TableCell>
                  <TableCell>{referral.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="body1">
            No referrals found matching the search term.
          </Typography>
        )}
      </TableContainer>
    </div>
  );
}

export default RFL;
