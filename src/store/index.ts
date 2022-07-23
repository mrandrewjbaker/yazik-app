import { configureStore } from '@reduxjs/toolkit'
import SideMenuReducers from '../components/SideMenu/SideMenu.slice';
import pickALanguageReducers from '../views/pickALanguage/pickALanguage.slice';
import speakingBotReducers from '../views/languageTools/speakingBot/speakingBot.slice';
import userDataReducers from '../views/login/login.slice';

const store = configureStore({
  reducer: {
    SideMenu: SideMenuReducers,
    pickALanguage: pickALanguageReducers,
    speakingBot: speakingBotReducers,
    userData: userDataReducers,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
