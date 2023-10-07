'use client'

import { usePathname, useRouter } from 'next/navigation'
import mainLogo from '/public/image/logo-black.png'
import beanIcon from '/public/image/icon-beans.png'
import Image from 'next/image'
import { siteConfig } from '@/constants/main'
import { IntroHeader } from '../IntroHeader/IntroHeader'
import { useState } from 'react'
import LoginModalPage from '../../app/_components/LoginModal/LoginModal'

export const Header = () => {
  const router = useRouter()
  const pathName = usePathname()
  const isIntroPage = pathName === '/intro'
  const onClickToHeaderLink = (href: string) => {
    router.push(`${href}`)
  }
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      {isIntroPage ? (
        <IntroHeader />
      ) : (
        <div>
          {isModalOpen ? <LoginModalPage setIsModalOpen={setIsModalOpen} /> : null}
          <div className="fixed top-0 w-full h-[auto] flex justify-between pl-10 pr-14 py-2 bg-white">
            <div className="flex flex-row gap-1 py-[5px]">
              <div
                onClick={() => {
                  onClickToHeaderLink('/')
                }}
                className="flex flex-row gap-1 cursor-pointer"
              >
                <Image src={beanIcon} alt="딱콩 캐릭터" width={30} height={30} />
                <Image src={mainLogo} alt="딱콩로고" width={40} height={40} />
              </div>
              <div className="ml-5 gap-5 flex flex-row">
                {siteConfig.header.map((headerlink) => (
                  <div
                    key={headerlink.title}
                    onClick={() => {
                      onClickToHeaderLink(headerlink.href)
                    }}
                    className="grid items-center font-bold text-primary-black hover:text-primary-300 cursor-pointer"
                  >
                    {headerlink.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <Image src={beanIcon} alt="알림아이콘" width={40} height={40} className="cursor-pointer" />
              <Image
                onClick={() => {
                  setIsModalOpen(true)
                }}
                src={beanIcon}
                alt="알림아이콘"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
