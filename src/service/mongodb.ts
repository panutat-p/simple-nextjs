import { MongoClient } from 'mongodb'

export async function connectToCluster(url: string): Promise<MongoClient> {
  let mongoClient

  try {
    mongoClient = new MongoClient(url)
    console.log('Connecting...')
    await mongoClient.connect()
    console.log('Successfully connected to MongoDB')

    return mongoClient
  } catch (e) {
    console.error('Connection to MongoDB Atlas failed!', e)
    throw e
  }
}
