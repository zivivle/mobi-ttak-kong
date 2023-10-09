'use client'
import { Button } from '@/components'
import { matchingLoadingConstants } from '@/constants'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const MatchingLoading = () => {
  const router = useRouter()

  const onClickToCreateStudyPage = () => {
    router.push('study/create')
  }

  return (
    <div className="bg-white mt-[120px] flex flex-col justify-center items-center rounded-[40px]">
      <div className="flex flex-col justify-center items-center w-[800px] relative">
        <Image
          src={matchingLoadingConstants.image}
          alt={'로딩 이미지'}
          width={400}
          height={800}
          className="mt-10 absolute z-0"
        />
        <div className="flex flex-col justify-center items-center w-[800px] relative z-10">
          <div className="mt-[280px] text-[20px] font-bold">{matchingLoadingConstants.title}</div>
          <p
            className="text-center mt-4 text-[14px] text-parimary-black"
            dangerouslySetInnerHTML={{ __html: matchingLoadingConstants.description }}
          />
        </div>
      </div>
      <div>
        <Button onClick={onClickToCreateStudyPage} className="mt-10 mb-20 w-[260px] h-[50px] rounded-[30px]">
          나만의 스터디 직접 만들러가기
        </Button>
      </div>
    </div>
  )
}
