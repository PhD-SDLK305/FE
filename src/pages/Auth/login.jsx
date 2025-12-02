import { useState } from 'react'
import { Input } from '../../components/ui/input'
import authorizedAxiosInstance from '../../utils/authorizedAxios'
import { API_ROOT } from '../../utils/constants'
import { handleToastMessage } from '../../utils/toasts'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormItem,
  FormLabel,
  FormMessage
} from '../../components/ui/form'
import { AuthHeader } from './AuthHeader/AuthHeader'
import { AuthFooter } from './AuthFooter/AuthFooter'
import { isStrongPassword, validEmail } from '../../utils/verify'
const FormSchema = z.object({
  otp: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.'
  })
})

export function AuthLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleChange = (event) => {
    const { type, value } = event.target
    type == 'email' ? setEmail(value) : setPassword(value)
  }
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: ''
    }
  })
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
    navigate('/home')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-black text-white px-4 py-12'>
      <div className='w-full max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='hidden lg:block px-6'>
            {/* decorative illustration / branding could be here */}
            <div className='rounded-3xl bg-gradient-to-tr from-slate-900/40 to-slate-900/20 p-6 backdrop-blur-sm soft-shadow'>
              <h2 className='text-3xl font-extrabold mb-2'>Chào mừng trở lại</h2>
              <p className='text-neutral-400'>Đăng nhập để tiếp tục xem nội dung. Bạn có thể dùng tài khoản đã đăng ký trước đó.</p>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleLogin)}
              className="w-full max-w-md mx-auto bg-[#0b0b0b]/60 p-6 rounded-2xl border border-white/6 shadow-sm space-y-6"
            >
              <FormItem>
                <AuthHeader
                  title={'Sign in'}
                  naviagteTo={'/signup'}
                  snippet={'Dont have an account?'}
                  navigateTo={'Get started'}
                />

                <FormLabel>Enter your email</FormLabel>
                <Input
                  className="mb-2"
                  type={'email'}
                  value={email}
                  handleChange={handleChange}
                />

                <FormLabel>Enter your password</FormLabel>
                <Input
                  type={'password'}
                  value={password}
                  handleChange={handleChange}
                />

                <FormMessage />
              </FormItem>

              <AuthFooter title={'Sign in'} handleClick={handleLogin} type={'submit'} />
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
