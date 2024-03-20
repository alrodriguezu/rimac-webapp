import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAMESPACE } from "./constants";
import { extraReducers } from "./actions";
import { authInitialState } from "./shared";

const authSlice = createSlice({
    name: SLICE_NAMESPACE,
    initialState: authInitialState,
    reducers: null,
    extraReducers,
})

export default authSlice.reducer;
