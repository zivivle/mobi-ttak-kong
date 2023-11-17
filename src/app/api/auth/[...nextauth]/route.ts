import NextAuth from 'next-auth'
import NaverProvider from 'next-auth/providers/naver'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@prisma/client'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET || '',
    }),
  ],
})

export { handler as GET, handler as POST }
