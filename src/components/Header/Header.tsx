'use client'

import Image from 'next/image'
import logo from '../../../public/image/logo-black.png'
import bean from '../../../public/image/icon-beans.png'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  const isIntroPage = pathname === '/intro'

  return (
    <div
      className={`fixed top-0 w-full h-[auto] flex justify-between pl-10 pr-14 py-2 ${
        isIntroPage ? 'bg-transparent' : 'bg-white'
      } text-white`}
    >
      <div className="flex flex-row gap-1 py-[5px]">
        <Image src={bean} alt="딱콩 캐릭터" width={30} />
        <Image src={logo} alt="딱콩로고" width={40} />
      </div>
      <div className="flex flex-row">
        <div className="grid items-center font-bold text-black">로그인</div>
      </div>
    </div>
  )
}
