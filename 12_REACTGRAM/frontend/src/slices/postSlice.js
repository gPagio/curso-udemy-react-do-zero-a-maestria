import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "../services/postService";

const initialState = {
  posts: [],
  post: {},
  error: false,
  loading: false,
  success: false,
  message: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
});

export const { resetMessage } = postSlice.actions;
export default postSlice.reducer;
