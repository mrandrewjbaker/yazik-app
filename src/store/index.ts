import { configureStore } from "@reduxjs/toolkit";
import SideMenuReducers from "../components/SideMenu/SideMenu.slice";
import pickALanguageReducers from "../views/pickALanguage/pickALanguage.slice";
import speakingBotReducers from "../views/languageTools/speakingBot/speakingBot.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "../app/features/User/user.slice";
import { authApi } from "../app/features/User/authApi";
import { userApi } from "../app/features/User/userApi";

const store = configureStore({
  reducer: {
    SideMenu: SideMenuReducers,
    pickALanguage: pickALanguageReducers,
    speakingBot: speakingBotReducers,

    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
