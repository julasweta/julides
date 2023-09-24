import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {ICard} from "../../interfaces";
import {portfolioService} from "../../services";

interface GenresState {
    genres: any;
    activeGenre: number;
    trigerMainePage: boolean;
    portfolio: ICard[];
    showBurger: boolean;
    showMenuMedia: boolean;
    img360:string;
}

const initialState: GenresState = {
    activeGenre: 1,
    genres: [],
    trigerMainePage: false,
    portfolio: null,
    showBurger: false,
    showMenuMedia: false,
    img360:null
};

/*-----------------AsyncThunk -------------------------------  */
export const getPortfolio = createAsyncThunk(
    "portfolioSlice/getPortfolio",
    async (_, thunkAPI) => {
        try {
            const {data} = await portfolioService.getPortfolio();
            return {record: data.record};
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
        setShowBurger: (state, action) => {
            state.showBurger = action.payload;
        },
        setShowMenuMedia: (state) => {
            state.showMenuMedia = !state.showMenuMedia;
        },
        setImg360: (state, action) => {
            state.img360 = action.payload;
        },

    },

    extraReducers: (builder) =>
        builder.addCase(getPortfolio.fulfilled, (state, action) => {
            console.log(action.payload.record);
            state.portfolio = action.payload.record;
        }),
});

const {reducer: portfolioReducer, actions} = PortfolioSlice;

const portfolioActions = {
    ...actions,
    getPortfolio,
};

export {portfolioActions, portfolioReducer};