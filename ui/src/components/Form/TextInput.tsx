import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

export interface ITextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  type: string
  required?: boolean
  autoComplete?: string
  label: string
  link?: boolean
  linkContent?: string
  register: UseFormRegister<FieldValues>
  error: FieldErrors<FieldValues>
}

export function TextInput({
  label = 'Label',
  link = false,
  linkContent,
  register,
  error,
  ...rest
}: ITextInputProps): JSX.Element {
  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <label
          htmlFor={rest.name || rest.id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {link && (
          <div className="text-sm">
            <a
              href={linkContent}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {linkContent}
            </a>
          </div>
        )}
      </div>
      <div className="mt-2">
        <input
          {...register(rest.name)}
          {...rest}
          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      {error && error[rest.name || rest.id] && (
        <span className="error-message absolute text-xs text-red-500 my-1">
          {(error[rest.name || rest.id] as FieldError)?.message ??
            'Error message'}
        </span>
      )}
    </div>
  )
}
