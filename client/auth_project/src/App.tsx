import { Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/login/Login'
import Protected from './pages/potected/Protected'
import Register from './pages/register/Register'
import Users from './pages/users/Users'
import NotFound from './pages/notFound/NotFound'





function App() {
  return (
    <>
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route element={<Protected />}>

          <Route path='/users' element={<Users />} />

        </Route>
        <Route path='*' element={<NotFound/>}/>

      </Routes>

    </>
  )
}

export default App
