import { createSlice } from "@reduxjs/toolkit";
import referralsData from "../ReferralData/referrals.json";

const initialState = {
  referrals: [],
};

const referralSlice = createSlice({
  name: "referrals",
  initialState,
  reducers: {
    fetchReferrals: (state) => {
      state.referrals = referralsData;
    },
    addReferral: (state, action) => {
      state.referrals.push(action.payload);
    },
    updateReferral: (state, action) => {
      const { referralId, updatedReferral } = action.payload;
      const index = state.referrals.findIndex(
        (referral) => referral.id === referralId
      );
      if (index !== -1) {
        state.referrals[index] = updatedReferral;
      }
    },
    deleteReferral: (state, action) => {
      const referralId = action.payload;
      state.referrals = state.referrals.filter(
        (referral) => referral.id !== referralId
      );
    },
  },
});

export const { fetchReferrals, addReferral, updateReferral, deleteReferral } =
  referralSlice.actions;

export default referralSlice.reducer;
