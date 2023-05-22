import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchReferrals } from "../Redux/referralActiontypes";

function RFL({ referrals, fetchReferrals }) {
  useEffect(() => {
    // Fetch the referrals when the component mounts
    fetchReferrals();
  }, [fetchReferrals]);

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

const mapStateToProps = (state) => {
  return {
    referrals: state.referrals.referrals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReferrals: () => dispatch(fetchReferrals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RFL);
