import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInitialGreeting } from "./speakingBot.api";

import { speakingBotInitialState } from "./speakingBotTypes";


export const getInitialGreetingAsync = createAsyncThunk(
  'speakingBot/getInitialGreeting',
  async (language: string) => {
    const response = await getInitialGreeting(language);
    console.log(response)
    return response;
  },
);

export const speakingBotSlice = createSlice({
  name: 'speakingBot',
  initialState: speakingBotInitialState,
  reducers: {
    resetStatus: (state) => {
      const newState = state;
      state.status = 'idle';
      return newState
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getInitialGreetingAsync.pending, (state, action) => {
      const newState = state;
      newState.status = 'pending';
      return newState
    })
    .addCase(getInitialGreetingAsync.fulfilled, (state, action) => {
      const newState = state;
      console.log(action.payload);
      newState.value.initialGreeting = action.payload;
      newState.status = 'fulfilled';
      return newState
    })
    .addCase(getInitialGreetingAsync.rejected, (state, action) => {
      const newState = state;
      newState.status = 'failed';
      return newState
    });
  }
})

export const { resetStatus } = speakingBotSlice.actions

export const selectSpeakingBotState = (state: any) => state.speakingBot;

export default speakingBotSlice.reducer
