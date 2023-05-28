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
  Button,
  Card,
  CardContent,
  Typography,
  Paper,
  Box
} from "@mui/material";

function RFL() {
  const dispatch = useDispatch();
  const referrals = useSelector((state) => state.referrals.referrals);


  useEffect(() => {
    dispatch(fetchReferrals());
  }, [dispatch]);

  const totalReferrals = referrals.length;
  const totalReferralsAccepted = referrals.reduce(
    (count, referral) => (referral.status === "Accepted" ? count + 1 : count),
    0
  );
  const totalReferralsPending = referrals.reduce(
    (count, referral) => (referral.status === "Pending" ? count + 1 : count),
    0
  );

  
  const [requests, setRequests] = useState([
    {
      id: 1,
      message: "React JS Developer",
      status: "Pending",
      Requestedby: "Scrum Master",
    },
    {
      id: 2,
      message: "Mean Stack Developer",
      status: "Added",
      Requestedby: "HR",
    },
    {
      id: 2,
      message: "C# Developer",
      status: "Pending",
      Requestedby: "HR",
    },
  ]);

  const handleRequestStatusChange = (id, newStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };


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
              Referrals Accepted
            </Typography>
            <Typography variant="h3" component="div" color="primary">
              {totalReferralsAccepted}
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
      <Box mt={10} />
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Request
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Status
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Requested By
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.message}</TableCell>
                  <TableCell>
                    {request.status === "Added" ? (
                      <Button
                        disabled
                        sx={{ backgroundColor: "#e0e0e0", color: "black" }}
                      >
                        Added
                      </Button>
                    ) : (
                      <Button
                        onClick={() =>
                          handleRequestStatusChange(request.id, "Added")
                        }
                        sx={{ backgroundColor: "#4caf50", color: "white" }}
                      >
                        Add
                      </Button>
                    )}
                    {request.status === "Pending" ? (
                      <Button
                        disabled
                        sx={{ backgroundColor: "#e0e0e0", color: "black" }}
                      >
                        Pending
                      </Button>
                    ) : (
                      <Button
                        onClick={() =>
                          handleRequestStatusChange(request.id, "Pending")
                        }
                        sx={{ backgroundColor: "#f44336", color: "white" }}
                      >
                        Pending
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>{request.Requestedby}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default RFL;
