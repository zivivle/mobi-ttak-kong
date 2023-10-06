'use client'

import mainLogo from '/public/image/logo-black.png'
import beanIcon from '/public/image/icon-beans.png'
import Image from 'next/image'

export const IntroHeader = () => {
  return (
    <div className="fixed top-0 w-full h-[auto] flex justify-between pl-10 pr-14 py-2 bg-transparent z-50">
      <div className="flex flex-row gap-1 py-[5px]">
        <Image src={beanIcon} alt="딱콩 캐릭터" width={30} height={30} />
        <Image src={mainLogo} alt="딱콩로고" width={40} height={40} />
      </div>
      <div className="flex flex-row">
        <div className="grid items-center font-bold text-black">로그인</div>
      </div>
    </div>
  )
}
