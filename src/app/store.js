import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feature/todo/todoSlice';
 
export const store = configureStore({ //store created
    reducer: todoReducer
})