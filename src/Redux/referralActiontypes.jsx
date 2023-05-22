
export const ADD_REFERRAL = "ADD_REFERRAL";
export const UPDATE_REFERRAL_STATUS = "UPDATE_REFERRAL_STATUS";
export const FETCH_REFERRALS = "FETCH_REFERRALS";

// referralActions.js
export const addReferral = (referral) => ({
  type: ADD_REFERRAL,
  payload: referral,
});

export const updateReferralStatus = (referralId, status) => ({
  type: UPDATE_REFERRAL_STATUS,
  payload: { referralId, status },
});

export const fetchReferrals = () => ({
  type: FETCH_REFERRALS,
});
