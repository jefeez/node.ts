import { env } from './env'

console.log('ENV:', env.DB_USER, env.DB_PASSWORD, env.DB_DATABASE)
export const app = () => `node.ts / ${env.NODE_ENV}`
