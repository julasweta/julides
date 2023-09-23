import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {ICard} from "../../interfaces";
import {portfolioService} from "../../services";

interface GenresState {
    genres: any;
    activeGenre: number;
    trigerMainePage: boolean;
    portfolio: ICard[];
}

const initialState: GenresState = {
    activeGenre: 1,
    genres: [],
    trigerMainePage: false,
    portfolio: null
};

/*-----------------AsyncThunk -------------------------------  */
export const getPortfolio = createAsyncThunk(
    "portfolioSlice/getPortfolio",
    async (_, thunkAPI) => {
        try {
            const {data} = await portfolioService.getPortfolio();
            return {record: data.record.portfolio};
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err);
        }
    },
);

/*--------------------- SLICE--------------------  */

export const PortfolioSlice = createSlice({
    name: "portfolioSlice",
    initialState,
    reducers: {
        setActiveGenre: (state, action) => {
            state.activeGenre = action.payload;
        },

    },

    extraReducers: (builder) =>
        builder.addCase(getPortfolio.fulfilled, (state, action) => {
            state.portfolio = action.payload.record;
        }),
});

const {reducer: portfolioReducer, actions} = PortfolioSlice;

const portfolioActions = {
    ...actions,
    getPortfolio,
};

export {portfolioActions, portfolioReducer};