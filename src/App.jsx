
import './App.css'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import AddPet from './pages/AddPet'

function App() {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <div>
      <Navbar />


      <Routes>

        <Route element={ <NotLoggedIn /> } >

          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />

        </Route>

        <Route element={<LoggedIn />}>

          <Route path='/profile' element={ <Profile /> } />
          <Route path='/add-pet' element={ <AddPet /> } />

        </Route>


      </Routes>

    </div>
  )
}

export default App
