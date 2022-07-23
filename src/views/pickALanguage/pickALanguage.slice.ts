import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { IRootState } from '../../store';
import { getLanguagePackTopics } from './pickALanguage.api';
import { IPickALanguageActiveLearningLanguagePackTopic } from './pickALanguageTypes';



export interface IPickALanguageState {
  value: {
    activeLearningLanguage: string | null;
    activeLearningLanguageCode: string | null;
    activeLearningLanguageStageId: number | null;
    activeLearningLanguagePackTopics:  IPickALanguageActiveLearningLanguagePackTopic[];

    activeNativeLanguage: string | null;
    activeNativeLanguageCode: string | null;
  },
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
}

const initialState: IPickALanguageState = {
  value: {
    activeLearningLanguage: null,
    activeLearningLanguageCode: null,
    activeLearningLanguageStageId: 1,
    activeLearningLanguagePackTopics: [],
    activeNativeLanguage: null,
    activeNativeLanguageCode: null,
  },
  status: 'idle',
}


export const getLanguagePackTopicsAsync = createAsyncThunk(
  'PickALanguage/LanguagePackTopics',
  async ({languageCode, stageId} : {languageCode: string, stageId: number}) => {
    const response = await getLanguagePackTopics(languageCode, stageId);
    return response;
  },
);

const PickALanguageSlice = createSlice({
  name: 'PickALanguage',
  initialState,
  reducers: {
    PickALanguage_SetActiveLearningLanguage(state, action: { payload: string }) {
      state.value.activeLearningLanguage = action.payload;
    },
    PickALanguage_SetActiveLearningLanguageCode(state, action: { payload: string }) {
      state.value.activeLearningLanguageCode = action.payload;
    },
    PickALanguage_SetActiveLearningLanguageStageId(state, action: { payload: number }) {
      state.value.activeLearningLanguageStageId = action.payload;
    },
    PickALanguage_SetActiveNativeLanguage(state, action: { payload: string }) {
      state.value.activeNativeLanguage = action.payload;
    },
    PickALanguage_SetActiveNativeLanguageCode(state, action: { payload: string }) {
      state.value.activeNativeLanguageCode = action.payload;
    },


  },
  extraReducers: (builder) => {
    builder
    .addCase(getLanguagePackTopicsAsync.pending, (state, action) => {
      const newState = state;
      newState.status = 'pending';
      return newState
    })
    .addCase(getLanguagePackTopicsAsync.fulfilled, (state, action) => {
      const newState = state;
      newState.value.activeLearningLanguagePackTopics = action.payload;
      newState.status = 'fulfilled';
      return newState
    })
    .addCase(getLanguagePackTopicsAsync.rejected, (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      return newState
    })
  }
});


export const { 
  PickALanguage_SetActiveLearningLanguage, 
  PickALanguage_SetActiveNativeLanguage,
  PickALanguage_SetActiveLearningLanguageCode,
  PickALanguage_SetActiveNativeLanguageCode,
  PickALanguage_SetActiveLearningLanguageStageId,
} = PickALanguageSlice.actions

export const select_pickALanguage = (state: IRootState) => state.pickALanguage;

export default PickALanguageSlice.reducer