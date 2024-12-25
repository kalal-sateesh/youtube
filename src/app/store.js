import { configureStore } from "@reduxjs/toolkit";
import navbartoggle from "../components/HeaderSlice"

export const store = configureStore({
  reducer: {
    navbar : navbartoggle
  },
});
