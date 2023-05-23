import { createSlice } from "@reduxjs/toolkit";
import { fetchReferrals } from "./referralActiontypes";

const referralSlice = createSlice({
  name: "referrals",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReferrals.fulfilled, (state, action) => {
      console.log(action.payload); 
      return [...action.payload]; 
    });
  },
});

export default referralSlice.reducer;
