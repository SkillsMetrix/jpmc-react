import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await response.json();
  return res;
});
export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});
export default userSlice.reducer;
