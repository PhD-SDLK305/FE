import { useState } from 'react'
import { Button } from '../../components/ui/button'
import {
  Card,
  CardContent
} from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import authorizedAxiosInstance from '../../utils/authorizedAxios'
import { API_ROOT } from '../../utils/constants'
import { handleToastMessage } from '../../utils/toasts'
import { useNavigate } from 'react-router-dom'
import { AuthHeader } from './AuthHeader/AuthHeader'
import { AuthFooter } from './AuthFooter/AuthFooter'

export function AuthLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = (event) => {
    const { type, value } = event.target
    type == 'email' ? setEmail(value) : setPassword(value)
  }

  const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const isStrongPassword = (password) => /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (
      !email || !password || email == '' || password == ''
      || !validEmail(email) || !isStrongPassword(password)
    ) {
      handleToastMessage('Please Enter correct email or Password!!!', 'error')
      return
    }
    const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/login`, {
      email,
      password
    })
    const userInfo = {
      _id : response.data._id,
      displayName : response.data.displayName,
      email : response.data.email,
      role: response.data.role
    }
    // localStorage.setItem('accessToken', response.data.accessToken )
    // localStorage.setItem('refreshToken', response.data.refreshToken )
    localStorage.setItem('userInfo', JSON.stringify(userInfo) )
    navigate('/dashboard')
  }

  const handleNavigate = () => {
    navigate('/signup')
  }

  return (
    <Card className='w-full max-w-md border shadow-2xl'>
      <AuthHeader handleNavigate={handleNavigate} currentPage={'Sign In'} navigateTo={'Sign Up'} desciption={'Enter your email below to login to your account'} />
      <CardContent>
        <form>
          <div className='flex flex-col gap-5'>
            <div className='grid gap-2'>
              <Label htmlFor='email' className='font-medium'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                value={email}
                handleChange={handleChange}
                required
                className='h-11'
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password' className='font-medium'>
                  Password
                </Label>
                <a
                  href='#'
                  className='inline-block ml-auto text-sm font-medium text-primary underline-offset-4 hover:underline'
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id='password'
                type='password'
                value={password}
                handleChange={handleChange}
                required className='h-11'
              />
            </div>
          </div>
        </form>
      </CardContent>
      <AuthFooter handleClick={handleLogin} type={'Sign In'} />
    </Card>
  )
}
