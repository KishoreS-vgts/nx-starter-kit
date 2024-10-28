import { FieldValues, useForm } from 'react-hook-form'
import { TextInput } from '@react-monorepo/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginValidationSchema } from '../validationSchema/login.validation'
import { cn } from '@react-monorepo/utils'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getInitialRoute } from '../route-middleware'
import { useUserProfile } from '@react-monorepo/store'
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const navigate = useNavigate()
  const data = useUserProfile((state) => state.data)
  const addItem = useUserProfile((state) => state.addItem)

  // mimic API call
  async function onSubmit(data: FieldValues) {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          // presisiting in localstorage
          addItem({
            email: data.email,
            isAuthenticated: true,
            role: 'user',
          })
          resolve(true)
        }, 2000)
      })
      if (response) {
        // navigate(getInitialRoute(user_data.role))
      }
    } catch (error) {
      console.error('Error during form submission', error)
    }
  }

  useEffect(() => {
    if (data.isAuthenticated && data.role) {
      navigate(getInitialRoute(data.role))
    }
  }, [data, navigate])

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInput
            name="email"
            id="email"
            label="Email"
            type="email"
            register={register}
            error={errors}
            placeholder="Enter your email"
          />

          <TextInput
            name="password"
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            register={register}
            link
            linkContent="Forgot your password?"
            placeholder="Enter your password"
            error={errors}
          />

          <div>
            <button
              disabled={isSubmitting}
              type="submit"
              className={cn(
                'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                { 'cursor-not-allowed opacity-50': isSubmitting }
              )}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  )
}
