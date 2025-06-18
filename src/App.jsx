import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className=' text-zinc-400 flex text-center justify-center mt-9 text-3xl'> Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}
export default App