// referralsReducer.js
import {
  ADD_REFERRAL,
  UPDATE_REFERRAL_STATUS,
  FETCH_REFERRALS,
} from "./referralActiontypes";

const initialState = {
  referrals: [],
};

const referralsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REFERRAL:
      return {
        ...state,
        referrals: [...state.referrals, action.payload],
      };
    case UPDATE_REFERRAL_STATUS:
      const { referralId, status } = action.payload;
      const updatedReferrals = state.referrals.map((referral) =>
        referral.id === referralId ? { ...referral, status } : referral
      );
      return {
        ...state,
        referrals: updatedReferrals,
      };
    case FETCH_REFERRALS:
      return {
        ...state,
        referrals: action.payload,
      };
    default:
      return state;
  }
};

export default referralsReducer;
