import { AuthLogin, Register, Verify, Home, NotFound, AccessDenied } from './pages'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import './index.css'
import { ToastContainer } from 'react-toastify'
// consolidated page imports moved to ./pages

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  if (!user) return <Navigate to='/signin' replace={true} />
  return <Outlet />
}

const UnauthorizedRoute = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  if (user) return <Navigate to='/home' replace={true} />
  return <Outlet />
}
function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path='/' element={
          <Navigate to='/signin' replace={true} />
        }/>
        <Route element={<UnauthorizedRoute />}>
          <Route path='/signin' element={
            <AuthLogin />
          }/>
          <Route path='/signup' element={
            <Register />
          }/>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route
            path='/home'
            element={
              <Home element={<div>hello</div>} />
            }
          />
        </Route>
        <Route path='/verify' element={
          <Verify />
        }/>
        <Route path='/access-denied' element={<AccessDenied />} />
        <Route
          path='*'
          element={
            <NotFound />
          }
        />
      </Routes>
    </>
  )
}

export default App