import { IPlan } from 'core/model/interfaces/plans.interface';
import { TSliceReducer } from '../store';
import { IUserState } from './shared';

const updateData: TSliceReducer<IUserState, IPlan> = (state, action) => {
    state.plan = { ...state.plan, ...action.payload };
};

const clearData: TSliceReducer<IUserState> = (state) => {
    state.name = '';
    state.lastName = '';
    state.birthDay = '';
    state.loading = false;
    state.age = 0;
    state.plan = null;
};

export const reducers = {
    updateData,
    clearData,
};
