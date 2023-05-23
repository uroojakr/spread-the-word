import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReferrals } from "../Redux/referralActiontypes";

function RFL() {
  const dispatch = useDispatch();
  const referrals = useSelector((state) => state.referrals);

  useEffect(() => {
    dispatch(fetchReferrals());
  }, [dispatch]);

  return (
    <div>
      <h1>Admin RFL</h1>
      <ul>
        {referrals.map((referral) => (
          <li key={referral.id}>
            Referral Code: {referral.referralCode}, Status: {referral.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RFL;
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchReferrals } from "../Redux/referralActiontypes";

// function RFL({ referrals, fetchReferrals }) {
//   useEffect(() => {
//     fetchReferrals(); // Dispatch the fetchReferrals action
//   }, [fetchReferrals]);

//   return (
//     <div>
//       <h1>Admin RFL</h1>
//       <ul>
//         {referrals.map((referral) => (
//           <li key={referral.id}>
//             Referral Code: {referral.referralCode}, Status: {referral.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     referrals: state.referrals,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchReferrals: () => dispatch(fetchReferrals()),
//   };
// };
// export default RFL;
