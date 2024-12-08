import { Company } from '@/db/model'
import db from '@/db/mongodb'

export async function findAllCompany(): Promise<Company[]> {
  const docs = await db.collection('company').find({}).sort({ _id: -1 }).toArray()
  return docs.map(
    (doc) =>
      ({
        _id: doc._id,
        name: doc.name,
        phone: doc.phone,
      }) as Company
  )
}
