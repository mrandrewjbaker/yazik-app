import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../../store";
import { login } from "./login.api";
import { IUserData } from "./loginTypes";

export interface IUserDataState {
  value: IUserData;
  status: "idle" | "pending" | "fulfilled" | "rejected";
}

const initialState: IUserDataState = {
  value: {
    id: "",
    username: "",
    email: "",
    enrolledLanguages: [],
  },
  status: "idle",
};

export const loginAsync = createAsyncThunk(
  "userData/login",
  async ({ username, password }: { username: string; password: string }) => {
    const response = await login(username, password);
    return response;
  }
);


const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userData_ResetuserData(state) {
      state.value = initialState.value;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginAsync.pending, (state, action) => {
      const newState = state;
      newState.status = 'pending';
      return newState
    })
    .addCase(loginAsync.fulfilled, (state, action) => {
      const newState = state;
      newState.value = action.payload;
      newState.status = 'fulfilled';
      return newState
    })
    .addCase(loginAsync.rejected, (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      return newState
    })
  }
})

export const {
  userData_ResetuserData
} = userDataSlice.actions;

export const select_userData = (state: IRootState) => state.userData;

export default userDataSlice.reducer;
