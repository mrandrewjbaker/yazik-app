import { createSlice} from '@reduxjs/toolkit'
import { IRootState } from '../../store';



export interface IPickALanguageState {
  value: {
    activeLearningLanguage: string | null;
    activeNativeLanguage: string | null;
  }
}

const initialState = {
  value: {
    activeLearningLanguage: null,
    activeNativeLanguage: null,
  }
} as IPickALanguageState

const PickALanguageSlice = createSlice({
  name: 'PickALanguage',
  initialState,
  reducers: {
    PickALanguage_SetActiveLearningLanguage(state, action: { payload: string }) {
      state.value.activeLearningLanguage = action.payload;
    },
    PickALanguage_SetActiveNativeLanguage(state, action: { payload: string }) {
      state.value.activeNativeLanguage = action.payload;
    }
  },
})


export const { PickALanguage_SetActiveLearningLanguage, PickALanguage_SetActiveNativeLanguage } = PickALanguageSlice.actions

export const select_pickALanguage = (state: IRootState) => state.pickALanguage;

export default PickALanguageSlice.reducer