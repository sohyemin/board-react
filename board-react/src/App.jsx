import './App.css'
import PostListComponent from './components/PostListComponent.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostListComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
