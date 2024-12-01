import { Collection, MongoClient } from 'mongodb'

export let client: MongoClient
export let companyCollection: Collection

export async function connect(host: string, port: string, username: string, password: string, dbName: string) {
  const dsn = `mongodb://${username}:${password}@${host}:${port}/admin`
  try {
    client = new MongoClient(dsn)
    console.log('Connecting...')
    await client.connect()
    console.log('Successfully connected to MongoDB')
    companyCollection = client.db(dbName).collection('company')
  } catch (e) {
    console.error('Failed to connect to MongoDB, err:', e)
    throw e
  }
}
