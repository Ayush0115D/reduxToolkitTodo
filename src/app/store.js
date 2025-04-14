import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
 
export const store = configureStore({ //store created
    reducer: todoReducer
})