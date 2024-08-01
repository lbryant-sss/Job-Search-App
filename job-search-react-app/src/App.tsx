import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Homepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Job-Search-App' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
