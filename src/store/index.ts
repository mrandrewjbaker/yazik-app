import { configureStore } from '@reduxjs/toolkit'
import SideMenuReducers from '../components/SideMenu/SideMenu.slice';
import pickALanguageReducers from '../views/pickALanguage/pickALanguage.slice';

const store = configureStore({
  reducer: {
    SideMenu: SideMenuReducers,
    pickALanguage: pickALanguageReducers,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch

export default store;