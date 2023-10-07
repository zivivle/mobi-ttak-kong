'use client'
import { Button } from '@/components'
import { signIn, signOut, useSession } from 'next-auth/react'

export const SignInOutButton = () => {
  const { data: session } = useSession()

  return (
    <>
      {!session ? (
        <Button
          variant={'tertiary'}
          className="w-[300px] h-[50px] rounded-[20px] text-primary-black"
          onClick={() => signIn('naver')}
        >
          네이버로 로그인하기
        </Button>
      ) : (
        <>
          <img src={session?.user?.image ?? '/default-image.png'} alt="User image"></img>
          <p>Welcome, {session?.user?.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  )
}
