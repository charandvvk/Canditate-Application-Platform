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
        setRoles(state, { payload }) {
            state.roles = payload;
        },
        setExperience(state, { payload }) {
            state.experience = payload;
        },
        setLocations(state, { payload }) {
            state.locations = payload;
        },
        setPay(state, { payload }) {
            state.pay = payload;
        },
        setCompany(state, { payload }) {
            state.company = payload;
            console.log(payload);
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
