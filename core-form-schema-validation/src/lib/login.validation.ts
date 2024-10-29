import { object, string } from 'zod'

// simple validation
export const loginValidationSchema = object({
  email: string().email(),
  password: string().min(5).max(10),
}).required()
