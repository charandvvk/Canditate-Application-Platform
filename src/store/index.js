import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    experience: 10,
    locations: [],
    pay: 0,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setExperience(state, { payload }) {
            state.experience = payload;
        },
        setLocations(state, { payload }) {
            state.locations = payload;
            console.log(payload);
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
