import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, ActionReducerMapBuilder, PayloadAction, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['user'],
    blacklist: ['forgotPassword'],
};

export const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);

type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type TSliceReducer<T, S = void> = (state: T, action: PayloadAction<S>) => T | void;
export type TSliceExtraReducer<T> = (builder: ActionReducerMapBuilder<T>) => ActionReducerMapBuilder<T>;
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
