import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className=' text-zinc-950 flex text-center justify-center'> Let's Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App