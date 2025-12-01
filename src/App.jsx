import { AuthLogin } from './pages/Auth/login'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import './index.css'
import { ToastContainer } from 'react-toastify'
import DashBoard from './pages/DashBoard/DashBoard'
import { Register } from './pages/Auth/register'

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  if (!user) return <Navigate to='/signin' replace={true} />
  return <Outlet />
}

const UnauthorizedRoute = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  if (user) return <Navigate to='/dashboard' replace={true} />
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
            <div className="min-h-screen flex flex-col bg-background dark:bg-gradient-to-br dark:from-background dark:via-secondary dark:to-background">
              <div className="flex flex-1 items-center justify-center p-4">
                <AuthLogin />
              </div>
            </div>
          }/>
          <Route path='/signup' element={
            <div className="min-h-screen flex flex-col bg-background dark:bg-gradient-to-br dark:from-background dark:via-secondary dark:to-background">
              <div className="flex flex-1 items-center justify-center p-4">
                <Register />
              </div>
            </div>
          }/>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route
            path='/dashboard'
            element={
              <DashBoard element={<div>hello</div>} />
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App