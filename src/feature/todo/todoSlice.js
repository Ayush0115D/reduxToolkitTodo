import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { //data lena btayega
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { //data send krna btayega
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})
//store ke liye he reducers and ye sb kra
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer