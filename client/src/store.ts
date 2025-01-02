import { configureStore } from "@reduxjs/toolkit";
import  tabReducer  from "./features/tabs/tabSlice";

export const store = configureStore({
    reducer: {
        tabs: tabReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch