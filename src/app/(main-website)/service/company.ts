import { Company } from '@/db/model'
import { companyCollection } from '@/db/mongodb'

export async function findAllCompany(): Promise<Company[]> {
  const docs = await companyCollection.find({}).sort({ _id: -1 }).toArray()
  return docs.map(
    (doc) =>
      ({
        _id: doc._id,
        name: doc.name,
        phone: doc.phone,
      }) as Company
  )
}
