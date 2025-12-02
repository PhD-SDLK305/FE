'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../../components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '../../components/ui/input-otp'
import { useNavigate } from 'react-router-dom'
import authorizedAxiosInstance from '../../utils/authorizedAxios'
import { API_ROOT } from '../../utils/constants'
import { handleToastMessage } from '../../utils/toasts'
import { AuthHeader } from './AuthHeader/AuthHeader'

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.'
  })
})

export function Verify() {
  const email = localStorage.getItem('email')
  const navigate = useNavigate()
  if (!email) navigate('/signin')
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: ''
    }
  })

  async function onSubmit(payload) {
    payload.email = email
    const response = await await authorizedAxiosInstance.put(`${API_ROOT}/v1/users/verify`, payload)
    if (response.status === 200) {
      handleToastMessage('Verify email Successfully', 'success')
      navigate('/signin')
    }
    form.setError('otp', {
      message: response?.response.data.message || 'OTP is incorrect'
    })
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-black text-white px-4 py-12'>
      <div className='w-full max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='hidden lg:block px-6'>
            <div className='rounded-3xl bg-gradient-to-tr from-slate-900/40 to-slate-900/20 p-6 backdrop-blur-sm soft-shadow'>
              <h2 className='text-2xl font-bold mb-2'>Xác thực Email</h2>
              <p className='text-neutral-400'>Nhập mã OTP đã được gửi đến email để hoàn tất đăng ký.</p>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-md mx-auto bg-[#0b0b0b]/60 p-6 rounded-2xl border border-white/6 shadow-sm space-y-6"
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <AuthHeader title={'Verify Email'} snippet={`Please verify your email ${email}`} />

                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>

                        <InputOTPSeparator />

                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>verify</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
