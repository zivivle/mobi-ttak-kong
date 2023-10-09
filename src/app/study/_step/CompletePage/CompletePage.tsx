'use client'

import { Button } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { COMPLETE_PAGE_TEXT } from './CompletePage.constants'
import type { CompletePageProps } from './CompletePage.types'

export const CompletePage = ({ type }: CompletePageProps) => {
  const router = useRouter()

  const onClickGoToMain = () => {
    router.push('/')
  }

  return (
    <section className="flex flex-col gap-[32px] items-center justify-center w-full h-[600px] mt-[50px] rounded-[40px] bg-white">
      <Image src="/image/icon-beans.png" alt="ttakkong-been" width={200} height={200} />
      <div className="flex flex-col gap-[18px] items-center justify-center">
        <h1 className="text-[28px] font-bold">{COMPLETE_PAGE_TEXT[type].title}</h1>
        <p className="text-gray-500">{COMPLETE_PAGE_TEXT[type].description}</p>
        <p
          className="text-gray-500 text-center text-[14px]"
          dangerouslySetInnerHTML={{ __html: COMPLETE_PAGE_TEXT[type].notes }}
        />
      </div>
      <Button size="lg" onClick={onClickGoToMain}>
        메인으로
      </Button>
    </section>
  )
}
