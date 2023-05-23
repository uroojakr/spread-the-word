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
      break;
    case UPDATE_REFERRAL_STATUS:
      break;
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
