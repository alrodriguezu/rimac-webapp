
import { TSliceExtraReducer } from '../../store';
import { SLICE_NAMESPACE } from '../constants';
import { IUserState } from '../shared';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadUserAction = createAsyncThunk(
    `${SLICE_NAMESPACE}/getUser`, () => null,
);

export const loadUserReducer: TSliceExtraReducer<IUserState> = builder =>
    builder
        .addCase(loadUserAction.pending, state => {
            state.loading = true;
        })
        .addCase(loadUserAction.rejected, (state) => {
            state.loading = false;
            state.name = '';
        })
        .addCase(loadUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.name = action.payload.name;
        });
