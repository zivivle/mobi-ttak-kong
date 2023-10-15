const initMocks = async () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    const { server } = await require('./server')
    server.listen({ onUnhandledRequest: 'bypass' })
  } else {
    const { worker } = await require('./browser')
    worker.start({ onUnhandledRequest: 'bypass' })
  }
}

export default initMocks

export * from './studyData'
export * from './userAppliedStudyData'
export * from './userCreatedStudyData'
export * from './userMatchingData'
