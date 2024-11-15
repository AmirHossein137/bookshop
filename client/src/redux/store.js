import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./features/loadingSlice/loading";
import AuthSlice from "./features/authSlice/authSlice";

export default configureStore({
  reducer: {
    loading: LoadingSlice,
    auth: AuthSlice,
  },
});
