import referralsData from "../Redux/referralsData.json";
import { fetchReferrals } from "./referralSlice";

export const fetchReferralsAsync = () => {
  return (dispatch) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      dispatch(fetchReferrals(referralsData));
    }, 1000);
  };
};
