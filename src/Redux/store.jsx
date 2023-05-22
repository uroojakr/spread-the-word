import { configureStore } from "@reduxjs/toolkit";
import referralsReducer from "./referralReducers";

const rootReducer = {
  referrals: referralsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
