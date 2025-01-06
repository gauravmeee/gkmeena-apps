import { useState } from 'react'
import MyApps from './components/MyApps'
import OthersApps from './components/OthersApps'
import Navbar from './components/Navbar'

import  {
	BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='h-full w-full bg-slate-800 m-0 p-0'>
    <Router>
    <Navbar/>
    <Routes>
          <Route exact path="/" element={<MyApps />} />
          <Route exact path="/others-apps" element={<OthersApps />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
