import z from 'zod'

// simple validation
export const loginValidationSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(5).max(10),
  })
  .required()
