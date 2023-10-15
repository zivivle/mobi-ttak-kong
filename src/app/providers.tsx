'use client'

import initMocks from '@/mocks'
import { PropsWithChildren } from 'react'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enable') {
  initMocks()
}

const Providers = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>
}

export default Providers
