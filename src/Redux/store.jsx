import { configureStore } from "@reduxjs/toolkit";
import referralReducer from "./referralSlice";

const store = configureStore({
  reducer: {
    referrals: referralReducer,
  },
});

export default store;