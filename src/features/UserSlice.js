import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  user:null
};



export const UserSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login:(state,action)=>{
      state.user = action.payload;
    },
    logout:(state)=>{
      state.user = null;
    }
  },
  
});

export const { login,logout } = UserSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state)=>state.user.user

export default UserSlice.reducer;
