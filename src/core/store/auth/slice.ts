import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAMESPACE } from "./constants";
import { extraReducers } from "./actions";
import { authInitialState } from "./shared";
import { reducers } from "./reducers";

const authSlice = createSlice({
    name: SLICE_NAMESPACE,
    initialState: authInitialState,
    reducers,
    extraReducers,
})

export const { updateData, clearData } = authSlice.actions;

export default authSlice.reducer;
