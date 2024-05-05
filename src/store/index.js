import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {},
});

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
    },
});

export default store;

export const filtersActions = filtersSlice.actions;
