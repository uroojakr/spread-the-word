import {
  ADD_REFERRAL,
  UPDATE_REFERRAL_STATUS,
  FETCH_REFERRALS,
} from "./referralActiontypes";
import referralsData from "../ReferralData/referrals.json";


const initialState = {
  referrals: [],
};

const referralsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REFERRAL:
    // ...
    case UPDATE_REFERRAL_STATUS:
    // ...
    case FETCH_REFERRALS:
      return {
        ...state,
        referrals: action.payload,
      };
    default:
      return state;
  }
};


const fetchReferrals = () => {
  return (dispatch) => {
  
    setTimeout(() => {
     
      dispatch({
        type: FETCH_REFERRALS,
        payload: referralsData,
      });
    }, 1000);
  };
};

export { fetchReferrals };
export default referralsReducer;
