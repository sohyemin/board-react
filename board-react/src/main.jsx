import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './layout/header.jsx'
import PostList from './PostList.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <PostList />
  </StrictMode>,
)