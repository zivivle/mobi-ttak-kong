import { ObjectId } from 'mongodb'
import { connectDB } from '@/utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function updateUserhandler(request: NextApiRequest, response: NextApiResponse) {
  try {
    const { studyDataId } = request.query

    if (typeof studyDataId !== 'string') {
      return response.status(400).json({ error: 'studyDataId must be a string' })
    }

    const db = (await connectDB).db('ttakkong')
    const result = await db.collection('user').findOne({ _id: new ObjectId(studyDataId) })

    if (!result) {
      return response.status(404).json({ error: 'Data not found' })
    }

    response.status(200).json(result)
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: 'Internal Server Error' })
  }
}
