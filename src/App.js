import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
   <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
       </Routes>
       </BrowserRouter>   
    </>
  )
}

export default App
