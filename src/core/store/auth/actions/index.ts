export * from './load-user';
import { compose } from '@reduxjs/toolkit';
import { loadUserReducer } from './load-user';

export const extraReducers = compose(loadUserReducer);

export { loadUserAction } from './load-user';
