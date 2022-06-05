import { configureStore } from '@reduxjs/toolkit'
import SideMenuReducers from '../components/SideMenu/SideMenu.slice';
import pickALanguageReducers from '../views/pickALanguage/pickALanguage.slice';
import speakingBotReducers from '../views/languageTools/speakingBot/speakingBot.slice';
const store = configureStore({
  reducer: {
    SideMenu: SideMenuReducers,
    pickALanguage: pickALanguageReducers,
    speakingBot: speakingBotReducers,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch

export default store;