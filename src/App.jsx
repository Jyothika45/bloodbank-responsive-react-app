import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import NavigationBar from './components/NavBar'
import AddDonor from './components/AddDonor'
import ViewDonor from './components/ViewDonor'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddDonor />} />
        <Route path="/view" element={<ViewDonor/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App