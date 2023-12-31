import { configureStore } from "@reduxjs/toolkit";
import { blogReducer, portfolioReducer } from "./slices";
// ...

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    blog:blogReducer,
  },
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
});

// типізація всіх states
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
