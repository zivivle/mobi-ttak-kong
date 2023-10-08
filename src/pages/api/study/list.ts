import { connectDB } from '@/utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const db = (await connectDB).db('ttakkong')
  let result = await db.collection('study').find().toArray()
  response.status(200).json(result)
}
