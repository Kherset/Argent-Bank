import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  isEditing: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    editUserData: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
});

export const { setUserData, editUserData } = userSlice.actions;

export const selectFirstName = (state) => state.user.firstName;
export const selectLastName = (state) => state.user.lastName;

export default userSlice.reducer;
