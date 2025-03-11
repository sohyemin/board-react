import './App.css'
import PostListComponent from './components/PostListComponent.jsx'
import PostComponent from './components/PostComponent.jsx'
import LoginComponent from './components/LoginComponent.jsx'


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<PostListComponent />}></Route>
          <Route path='/add-Post' element={<PostComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>
        </Routes>
    </>
  )
}

export default App
