import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'

async function connect(host: string, port: string, username: string, password: string): Promise<MongoClient> {
  if (!host) throw new Error('MONGO_HOST is required')
  if (!port) throw new Error('MONGO_PORT is required')
  if (!username) throw new Error('MONGO_USERNAME is required')
  if (!password) throw new Error('MONGO_PASSWORD is required')

  const dsn = `mongodb://${username}:${password}@${host}:${port}/admin`
  try {
    let client = new MongoClient(dsn)
    console.info('Connecting...')
    const conn = await client.connect()
    console.info('🟢 Connected to MongoDB')
    return conn
  } catch (e) {
    console.error('🔴 Failed to connect to MongoDB, err:', e)
    throw e
  }
}

const conn = await connect(
  process.env.MONGODB_HOST!,
  process.env.MONGODB_PORT!,
  process.env.MONGODB_USERNAME!,
  process.env.MONGODB_PASSWORD!
)

const dbSingleton = (): Db => {
  if (!process.env.MONGODB_DATABASE_NAME) {
    throw new Error('MONGODB_DATABASE_NAME is required')
  }
  return conn.db(process.env.MONGODB_DATABASE_NAME!)
}

declare const globalThis: {
  dbGlobal: ReturnType<typeof dbSingleton>
} & typeof global

const db = globalThis.dbGlobal ?? dbSingleton()

if (process.env.NODE_ENV !== 'production') {
  globalThis.dbGlobal = db
}

export default db
