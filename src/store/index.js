import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    roles: [],
    experience: null,
    locations: [],
    pay: null,
    company: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter(state, { payload }) {
            state[payload.type] = payload.value;
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
