import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { interactInitialConversation, interactConversationReply } from "./speakingBot.api";

import { IConversationLogItem, ISpeakingBotState } from "./speakingBotTypes";

const speakingBotInitialState: ISpeakingBotState = {
  value: {
    conversationLog: [],
    conversationUserReplyOptions: [],
  },
  status: 'idle',
};

export const interactInitialConversationAsync = createAsyncThunk(
  'speakingBot/interactInitialConversation',
  async () => {
    const response = await interactInitialConversation();
    console.log(response)
    return response;
  },
);

export const interactConversationReplyAsync = createAsyncThunk(
  'speakingBot/interactConversationReply',
  async (conversationLog: IConversationLogItem[]) => {
    const response = await interactConversationReply(conversationLog);
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
    pushUserReply: (state, action) => {
      const newState = state;
      newState.value.conversationLog.push(action.payload);
      return newState
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(interactInitialConversationAsync.pending, (state, action) => {
      const newState = state;
      newState.status = 'pending';
      return newState
    })
    .addCase(interactInitialConversationAsync.fulfilled, (state, action) => {
      const newState = state;
      const newConversationEntry = {
        sender: action.payload.sender,
        message: action.payload.message,
      };
      const newConversationUserReplyOptions = action.payload.userReplyOptions;
      newState.value.conversationLog = [newConversationEntry];
      newState.value.conversationUserReplyOptions = newConversationUserReplyOptions;
      newState.status = 'fulfilled';
      return newState
    })
    .addCase(interactInitialConversationAsync.rejected, (state, action) => {
      const newState = state;
      newState.status = 'failed';
      return newState
    })
    .addCase(interactConversationReplyAsync.pending, (state, action) => {
      const newState = state;
      newState.status = 'pending';
      return newState
    })
    .addCase(interactConversationReplyAsync.fulfilled, (state, action) => {
      const newState = state;
      const newConversationEntry = {
        sender: action.payload.sender,
        message: action.payload.message,
      };
      const newConversationUserReplyOptions = action.payload.userReplyOptions;
      newState.value.conversationLog = [...state.value.conversationLog, newConversationEntry];
      newState.value.conversationUserReplyOptions = newConversationUserReplyOptions;
      newState.status = 'fulfilled';
      return newState
    })
    .addCase(interactConversationReplyAsync.rejected, (state, action) => {
      const newState = state;
      newState.status = 'failed';
      return newState
    });
  }
})

export const { resetStatus, pushUserReply } = speakingBotSlice.actions

export const selectSpeakingBotState = (state: any) => state.speakingBot;

export default speakingBotSlice.reducer
