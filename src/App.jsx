import { AuthLogin } from './pages/Auth/login'
import { Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { ToastContainer } from 'react-toastify'
import DashBoard from './pages/DashBoard/DashBoard'
import { Register } from './pages/Auth/register'
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
          <Navigate to='/sigin' replace={true} />
        }/>
        <Route path='/signin' element={
          <div className="min-h-screen flex flex-col bg-background dark:bg-gradient-to-br dark:from-background dark:via-secondary dark:to-background">
            <div className="flex flex-1 items-center justify-center p-4">
              <AuthLogin />
            </div>
          </div>
        }>
        </Route>
        <Route path='/signup' element={
          <div className="min-h-screen flex flex-col bg-background dark:bg-gradient-to-br dark:from-background dark:via-secondary dark:to-background">
            <div className="flex flex-1 items-center justify-center p-4">
              <Register />
            </div>
          </div>
        }>
        </Route>
        <Route path='/dashboard' element={
          <DashBoard element={<div>hello</div>} />
        }></Route>
      </Routes>
    </>
  )
}

export default App