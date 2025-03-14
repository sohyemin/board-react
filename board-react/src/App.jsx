import './App.css'
import PostListComponent from './components/PostListComponent.jsx'
import PostComponent from './components/PostComponent.jsx'
import Header from './layout/header.jsx'
import LoginComponent from './components/LoginComponent.jsx'


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  const isloginPage = location.pathname == "/login";

  return (
    <>      
        { !isloginPage && <Header />}
        <Routes>
          <Route path='/' element={<PostListComponent />}></Route>
          <Route path='/add-Post' element={<PostComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}/>
        </Routes>
    </>
  )
}

export default App
