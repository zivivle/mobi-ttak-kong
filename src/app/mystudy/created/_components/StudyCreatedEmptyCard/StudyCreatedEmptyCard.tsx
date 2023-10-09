'use client'

import Image from 'next/image'
import beanIcon from '/public/image/icon-beans.png'
import { Button } from '@/components'
import { useRouter } from 'next/navigation'

export const StudyCreatedEmptyCard = () => {
  const router = useRouter()
  const onClickToCreateStudy = () => {
    router.push('/study/create')
  }

  return (
    <div className="flex flex-row">
      <div className="w-[420px] bg-primary-50 rounded-[20px] p-[45px] mt-[30px] gap-8 flex flex-row justify-center items-center">
        <Image src={beanIcon} alt="콩 아이콘" width={140} />
        <Button onClick={onClickToCreateStudy}>스터디 만들러 가기</Button>
      </div>
    </div>
  )
}
