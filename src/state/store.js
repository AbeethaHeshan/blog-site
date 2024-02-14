import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';

const store = configureStore({
    reducer: {
        cart: blogReducer
    }
});

export default store;