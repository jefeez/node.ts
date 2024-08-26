import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()
const schemas = z.object({
  NODE_ENV: z.string().default('dev'),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
})

export const env = schemas.parse(process.env)
