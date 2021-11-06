/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PermissionRole } from "../../shared/constants";

export interface UserState {
    uid?: string,
    name?: string,
    role?: PermissionRole,
    avatar?: string,
    email?: string
}

export type User = UserState;

const initialState = {
  uid: undefined, name: undefined, role: undefined, avatar: undefined, email: undefined,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<User>) {
      state.uid = action.payload.uid;
      state.role = action.payload.role;
      state.avatar = action.payload.avatar;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },

});

export const { updateUser } = userSlice.actions;
export default userSlice;
