import { connectDB } from '@/utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function addUserHandler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    const db = (await connectDB).db('ttakkong')
    try {
      const result = await db.collection('user').insertOne(request.body)
      console.log(result)
      response.status(200).json(result)
    } catch (error) {
      console.log(error)
    }
  }
}
