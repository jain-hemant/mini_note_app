import About from '../pages/About'
import AddNotes from '../pages/AddNotes'
import Dashboard from '../pages/Dashboard'
import ViewNotes from '../pages/ViewNotes'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
    return (
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/add-note' element={<AddNotes />} />
                <Route path='/view-note' element={<ViewNotes />} />
                <Route path='/about' element={<About />} />
            </Routes>
    )
}
