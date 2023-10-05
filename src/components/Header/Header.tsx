'use client'

import { usePathname } from 'next/navigation'
import mainLogo from '/public/image/logo-black.png'
import beanIcon from '/public/image/icon-beans.png'
import Image from 'next/image'
import { siteConfig } from '@/constants/main'
import Link from 'next/link'

export const Header = () => {
  const pathname = usePathname()
  const isIntroPage = pathname === '/intro'

  return isIntroPage ? (
    <div className="fixed top-0 w-full h-[auto] flex justify-between pl-10 pr-14 py-2 bg-transparent">
      <div className="flex flex-row gap-1 py-[5px]">
        <Image src={beanIcon} alt="딱콩 캐릭터" width={30} height={30} />
        <Image src={mainLogo} alt="딱콩로고" width={40} height={40} />
      </div>
      <div className="flex flex-row">
        <div className="grid items-center font-bold text-black">로그인</div>
      </div>
    </div>
  ) : (
    <div className="fixed top-0 w-full h-[auto] flex justify-between pl-10 pr-14 py-2 bg-white">
      <div className="flex flex-row gap-1 py-[5px]">
        <Link href={siteConfig.header[0].href} className="flex flex-row gap-1">
          <Image src={beanIcon} alt="딱콩 캐릭터" width={30} height={30} />
          <Image src={mainLogo} alt="딱콩로고" width={40} height={40} />
        </Link>
        <div className="ml-5 gap-5 flex flex-row">
          {siteConfig.header.map((headerlink) => (
            <Link
              key={headerlink.title}
              href={headerlink.href}
              className="grid items-center font-bold text-primary-black hover:text-primary-300"
            >
              {headerlink.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <Image src={beanIcon} alt="알림아이콘" width={40} height={40} className="cursor-pointer" />
        {/* 로그인되어있는 상태에서는 로그아웃 아이콘을 보여줘야함 */}
        {/* <Image src={logoutIcon} alt="로그아웃아이콘" width={40} height={40} className="cursor-pointer" /> */}

        <Image src={beanIcon} alt="로그인아이콘" width={40} height={40} className="cursor-pointer" />
      </div>
    </div>
  )
}
