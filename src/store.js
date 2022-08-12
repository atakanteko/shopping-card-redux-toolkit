import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/card/cardSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        cart: cardReducer,
        modal: modalReducer,
    },
})