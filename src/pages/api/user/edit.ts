import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  let editPost = {
    title: request.body.title,
    content: request.body.content,
  }
  if (request.method === 'POST') {
    const db = (await connectDB).db('ttakkong')
    if (request.body.title === '' || request.body.content === '') {
      return response.status(400).json('빈칸 노노')
    }
    try {
      const result = await db.collection('user').updateOne(
        { _id: new ObjectId(request.body._id) },
        {
          $set: editPost,
        },
      )
      response.status(200).redirect(302, '/')
    } catch (error) {
      console.log(error)
    }
  }
}

export default handler
