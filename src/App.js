import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import NextPage from './pages/NextPage'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage/>}></Route>
          <Route path='/nextpage' element={<NextPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
