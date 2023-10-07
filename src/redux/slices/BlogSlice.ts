import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { blogService } from "../../services";
import { ICardInterior } from '../../interfaces/blogInterface';

interface BlogState {
  posts: ICardInterior[];
  singlePost: ICardInterior;
}

const initialState: BlogState = {
  posts: [],
  singlePost:null
};

/*-----------------AsyncThunk -------------------------------  */
export const getPosts = createAsyncThunk(
  "blogSlice/getPosts",
  async (_, thunkAPI) => {
    try {
      const {data} = await blogService.getPosts();
      return {record: data.record};
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const addPost = createAsyncThunk<ICardInterior, { postData: ICardInterior; }>(
  "blogSlice/addPost",
  async ({ postData }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await blogService.addPost(postData);
      return data.results;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err);
    }
  },
);


export const BlogSlice = createSlice({
    name: "blogSlice",
    initialState,
    reducers: {
        setSinglePost: (state, action) => {
            state.singlePost = action.payload;
        },
    
    },

    extraReducers: (builder) =>
      builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload.record;
            
      })
        .addCase(addPost.fulfilled, (state, action) => {
    state.posts.push(action.payload)
  }),
});

const { reducer: blogReducer, actions } = BlogSlice;

const blogActions = {
    ...actions,
  getPosts,
    addPost,
};

export { blogActions, blogReducer };