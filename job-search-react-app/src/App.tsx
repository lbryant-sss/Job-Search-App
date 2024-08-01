import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Home(){
  return(
    <>
      <h1>Welcome Home</h1>
    </>
  )
}

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
