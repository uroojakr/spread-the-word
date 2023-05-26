import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReferrals,
  addReferral,
  updateReferral,
  deleteReferral,
} from "../Redux/referralSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
} from "@material-ui/core";


function RFL() {
  const dispatch = useDispatch();
  const referrals = useSelector((state) => state.referrals.referrals);
  const [newReferralCode, setNewReferralCode] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [updatedReferralCode, setUpdatedReferralCode] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [selectedReferralId, setSelectedReferralId] = useState(null);

  useEffect(() => {
    dispatch(fetchReferrals());
  }, [dispatch]);

  const handleAddReferral = () => {
    const newReferral = {
      id: Math.random(),
      referralCode: newReferralCode,
      status: newStatus,
    };
    dispatch(addReferral(newReferral));
    setNewReferralCode("");
    setNewStatus("");
  };

  const handleUpdateReferral = (
    referralId,
    currentReferralCode,
    currentStatus
  ) => {
    setSelectedReferralId(referralId);
    setUpdatedReferralCode(currentReferralCode);
    setUpdatedStatus(currentStatus);
  };

  const handleSaveReferral = () => {
    const updatedReferral = {
      id: selectedReferralId,
      referralCode: updatedReferralCode,
      status: updatedStatus,
    };
    dispatch(updateReferral(selectedReferralId, updatedReferral));
    setSelectedReferralId(null);
    setUpdatedReferralCode("");
    setUpdatedStatus("");
  };

  const handleDeleteReferral = (referralId) => {
    dispatch(deleteReferral(referralId));
  };

  return (
     <div>
      <h1>Admin RFL CRUD</h1>
      <TextField
        value={newReferralCode}
        onChange={(e) => setNewReferralCode(e.target.value)}
        label="Referral Code"
      />
      <TextField
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        label="Status"
      />
      <Button onClick={handleAddReferral}>Add Referral</Button>
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Referral Code</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {referrals.map((referral) => (
              <TableRow key={referral.id}>
                <TableCell>
                  {selectedReferralId === referral.id ? (
                    <TextField
                      value={updatedReferralCode}
                      onChange={(e) => setUpdatedReferralCode(e.target.value)}
                      label="Referral Code"
                    />
                  ) : (
                    referral.referralCode
                  )}
                </TableCell>
                <TableCell>
                  {selectedReferralId === referral.id ? (
                    <TextField
                      value={updatedStatus}
                      onChange={(e) => setUpdatedStatus(e.target.value)}
                      label="Status"
                    />
                  ) : (
                    referral.status
                  )}
                </TableCell>
                <TableCell>
                  {selectedReferralId === referral.id ? (
                    <Button onClick={handleSaveReferral}>Save</Button>
                  ) : (
                    <>
                      <Button
                        onClick={() =>
                          handleUpdateReferral(
                            referral.id,
                            referral.referralCode,
                            referral.status
                          )
                        }
                      >
                        Update
                      </Button>
                      <Button onClick={() => handleDeleteReferral(referral.id)}>
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RFL;
