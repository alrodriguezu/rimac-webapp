
import userApi from 'core/services/user';
import { TSliceExtraReducer } from '../../store';
import { SLICE_NAMESPACE } from '../constants';
import { IUserState } from '../shared';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadUserAction = createAsyncThunk(
    `${SLICE_NAMESPACE}/getUser`, () => userApi.login(),
);

export const loadUserReducer: TSliceExtraReducer<IUserState> = builder =>
    builder
        .addCase(loadUserAction.pending, state => {
            state.loading = true;
        })
        .addCase(loadUserAction.rejected, (state) => {
            state.loading = false;
        })
        .addCase(loadUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.name = action.payload.name;
            state.lastName = action.payload.lastName;
            state.birthDay = action.payload.birthDay;
            state.age = action.payload.age;
        });
