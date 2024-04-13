import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppBar from './AppBar'
const Dashboard = React.lazy(() => import('./Dashboard'))
const ContactUs = React.lazy(() => import('./ContactUs'));

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<div>loading....</div>}><Dashboard /></Suspense>
          } />
          <Route path='/contact' element={
            <Suspense fallback={<div>loading....</div>}><ContactUs /></Suspense>
          } />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
