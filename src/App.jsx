import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import NavigationBar from './components/NavBar'
import AddDonor from './components/AddDonor'


function App() {
  return (
    <BrowserRouter>

      <NavigationBar />

      <Routes>
        <Route path="/add" element={<AddDonor />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App