import Home from "./pages/Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "../ProtectedRoute"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App