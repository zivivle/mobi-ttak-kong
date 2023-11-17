import { rest } from 'msw'

/**
 * 샘플용 api입니다.
 */
export const getMatchingStudyList = rest.get('/api/study', (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: 'msw 잘 돌아가요 🥲' }))
})
