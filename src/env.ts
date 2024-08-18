import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()
const schemas = z.object({
  NODE_ENV: z.string().default('dev'),
})

export const env = schemas.parse(process.env)
