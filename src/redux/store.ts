import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./slices/team.slice"

export const store = configureStore({
    // On intègre chacune de nos slice à l'objet "reducer" :
    reducer: {
        team: teamReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;