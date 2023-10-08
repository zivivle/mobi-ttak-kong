'use client'

import Image from 'next/image'
import beanIcon from '/public/image/icon-beans.png'
import { Button } from '@/components'
import { useRouter } from 'next/navigation'

export const StudyAppliedEmptyDataCard = () => {
  const router = useRouter()
  const onClickToMatchingPage = () => {
    router.push('/matching')
  }

  return (
    <div className=" flex flex-col justify-center items-center gap-10 w-[400px] bg-primary-50 rounded-[20px] p-[60px] mt-[30px]">
      <Image src={beanIcon} alt="콩아이콘" width={200} height={200} />
      <Button onClick={onClickToMatchingPage}>내 매칭 스터디들 보러가기</Button>
    </div>
  )
}
