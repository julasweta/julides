import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { blogService } from "../../services";
import { Block, ICardInterior } from '../../interfaces/blogInterface';

interface BlogState {
  posts: ICardInterior[];
  blocks: Block[],
  loading: boolean;
}

const initialState: BlogState = {
  posts: [],
  blocks: [],
  loading: true,
};

/*-----------------AsyncThunk -------------------------------  */
export const getPosts = createAsyncThunk(
  "blogSlice/getPosts",
  async (_, thunkAPI) => {
    try {
      const {data} = await blogService.getPosts();
      return  data ;
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const addPost = createAsyncThunk<any, { data: any }>(
  "blogSlice/addPost",
  async ({ data }, { rejectWithValue }) => {
    console.log(data);
    try {
      await blogService.addPost(data);

      console.log(data);
      // Повертаємо тільки необхідні дані з відповіді
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response); // Повертаємо тільки дані про помилку
    }
  },
);





export const BlogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    setBlock: (state, action) => {
      state.blocks.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = !state.loading;
    },
  },

  extraReducers: (builder) =>
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    })
      .addCase(addPost.fulfilled, (state, action) => {
        console.log(action.payload);
        //state.posts.push(action.payload)
      }),
});

const { reducer: blogReducer, actions } = BlogSlice;

const blogActions = {
  ...actions,
  getPosts,
  addPost,
};

export { blogActions, blogReducer };