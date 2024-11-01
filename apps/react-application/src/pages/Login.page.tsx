import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { loginValidationSchema } from '@react-monorepo/core-form-schema-validation'
import { useAuthAndProfile } from '@react-monorepo/core-hooks'
import { useUserStore } from '@react-monorepo/core-provider'
import { type LoginType } from '@react-monorepo/core-types'
import { Button, TextInput } from '@react-monorepo/core-ui'

import { zodResolver } from '@hookform/resolvers/zod'

import { getInitialRoute } from '../route-middleware'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const navigate = useNavigate()
  // import custom hook for login
  const { isLoading, mutate } = useAuthAndProfile()
  const role = useUserStore((state) => state.role)
  const isAuthenticated = useUserStore((state) => state.isAuthenticated)

  async function onSubmit(data: LoginType) {
    await mutate(data)
  }

  //  initial routing redirection
  useEffect(() => {
    if (isAuthenticated && role) {
      navigate(getInitialRoute(role))
    }
  }, [role, isAuthenticated, navigate])
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
          <Button isSubmitting={isSubmitting} loading={isLoading}>
            Sign in
          </Button>
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
