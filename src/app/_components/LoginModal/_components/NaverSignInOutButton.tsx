'use client'
import { Button } from '@/components'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import naverLogo from '../../../../../public/image/naver-logo.svg.png'

export const NaverSignInOutButton = () => {
  const { data: session } = useSession()

  return (
    <>
      {!session ? (
        <div className="flex flex-row justify-center items-center">
          <Button
            variant={'tertiary'}
            className="w-[300px] h-[50px] rounded-[20px] text-primary-black gap-1"
            onClick={() => signIn('naver')}
          >
            <Image src={naverLogo} alt="NaverLogo" width={80} height={80} />
            <p>로 로그인하기</p>
          </Button>
        </div>
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
