import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
<div className="relative mt-16 flex justify-center items-center">
  {/* LEFT Glow */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-cyan-700 to-teal-800 blur-2xl opacity-20 animate-pulse rounded-full" />

  {/* RIGHT Glow */}
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-48 h-48 bg-gradient-to-bl from-emerald-700 to-cyan-800 blur-2xl opacity-20 animate-pulse rounded-full" />

  {/* Main Heading */}
  <h1 className="relative z-10 text-4xl sm:text-5xl font-bold text-white text-center px-8 py-4 rounded-xl shadow-xl bg-gradient-to-r from-cyan-700 via-teal-800 to-emerald-700 animate-fade-in">
    Redux Toolkit Todo App
  </h1>
</div>



      <AddTodo />
      <Todos />
    </>
  )
}
export default App