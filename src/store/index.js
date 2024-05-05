import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    experience: 10,
    pay: 70,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setExperience(state, { payload }) {
            state.experience = payload;
        },
        setPay(state, { payload }) {
            state.pay = payload;
        },
    },
});

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
    },
});

export default store;

export const filtersActions = filtersSlice.actions;
