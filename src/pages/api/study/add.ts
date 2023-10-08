import { connectDB } from '@/utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function addStudyHandler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    const db = (await connectDB).db('ttakkong')
    try {
      const result = await db.collection('study').insertOne(request.body)
      console.log(result)
      response.status(200).json(result)
    } catch (error) {
      console.log(error)
    }
  }
}
