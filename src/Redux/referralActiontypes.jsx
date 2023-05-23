import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReferrals = createAsyncThunk(
  
  async () => {
    const response = await fetch("ReferralData/referrals.json");
    const data = await response.json();
    return data;
  }
);
