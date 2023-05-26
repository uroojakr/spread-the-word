import referralsData from "../Redux/referralsData.json";
import { fetchReferrals } from "./referralSlice";

export const fetchReferrals = () => {
  return (dispatch) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      dispatch(fetchReferrals(referralsData));
    }, 1000);
  };
};
