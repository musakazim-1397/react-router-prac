import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice= createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        increase: (state, action) => state + action.payload
    }
});

const store = configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
});
export default store;
export const counterActions = counterSlice.actions;