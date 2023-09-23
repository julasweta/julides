import {configureStore} from "@reduxjs/toolkit";
import {portfolioReducer} from "./slices/PorfolioSlice";
// ...

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    },
});

// типізація всіх states
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;