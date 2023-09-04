// src/redux/store.ts

import { counterReducer, dataSlice } from './slices';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        source: dataSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
