import { Action, combineReducers } from 'redux';
import authReducer from './auth/slice';
import { UserState } from './auth';

export interface IState {
    user: UserState;
}

export const reducers = combineReducers({
    user: authReducer,
});

export const rootReducer = (state: IState, action: Action) => reducers(state, action);
