'use client'

import { Button } from '@/components'
import levelImage from '/public/image/level-image.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { StudyDataType } from '@/types'

export const StudyDetailInfoCard = ({ studyDataId }: { studyDataId: string }) => {
  const [studyData, setStudyData] = useState<StudyDataType>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/study/listDetail?studyDataId=${studyDataId}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setStudyData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [studyDataId])

  if (!studyData) {
    return <div>Loading...</div>
  }

  return (
    <div className=" w-[1000px] bg-white rounded-[20px] p-7 mt-[80px] mb-[40px] ">
      <div className="flex flex-row items-center mt-4">
        <div className=" bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white rounded-[20px] inline-block">
          <p>{studyData.field}</p>
        </div>
        <div className=" bg-primary-50 px-3 py-1 text-[12px] inline-flex font-semibold text-primary-black rounded-[20px] gap-[1px]">
          <Image src={levelImage} alt="등급 이미지" width={20} height={10} />
          <p>{studyData.level}</p>
        </div>
      </div>

      <div className=" mt-5 text-primary-gray939 text-[12px] font-medium">{studyData.detailField}</div>
      <div className=" text-black text-[24px] font-bold">{studyData.title}</div>
      <div className=" mt-2 text-black text-[12px] font-bold">
        현재 인원 / 최소 인원 ({studyData.nowMemberCount} / {studyData.minMemberCount})
      </div>
      <div className=" mt-5 text-black text-[12px] font-bold">
        {studyData.isInPerson ? '대면 스터디' : '비대면 스터디'}
      </div>
      <div className=" text-black text-[12px] font-medium">장소 : {studyData.location}</div>
      <div className="bg-primary-50 px-7 py-10 mt-5 text-black text-[14px] font-normal rounded-[20px]">
        {studyData.content}
      </div>
      <div className="flex justify-center mt-5 ">
        <Button variant={'secondary'} className="w-[220px] rounded-[20px] mt-2 mb-4">
          스터디 지원하기
        </Button>
      </div>
    </div>
  )
}
