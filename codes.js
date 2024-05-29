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








import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { getUsers } from '../redux/userState';
function UserApp(props) {
    const data= useSelector(state => state.userdata.users)
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(getUsers())
    })
    return (
        <div>
            
        </div>
    );
}

export default UserApp;
