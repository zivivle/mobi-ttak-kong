'use client'

import Link from 'next/link'
import { StudyCreatedCard } from './_components'
import { studyCreatedConstants } from '@/constants'
import { useEffect, useState } from 'react'
import { StudyDataType, UserDataType } from '@/types'

export default function StudyCreatedPage() {
  const [userStudyData, setUserStudyData] = useState<UserDataType[]>([])
  const studyDatas: StudyDataType[] = userStudyData[0]?.isCreatedStudy

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/user/list`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setUserStudyData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  if (!studyDatas) return

  return (
    <div className="h-screen justify-center items-center  bg-primary-50">
      <div
        className="
          h-auto flex flex-col pt-[100px] px-[100px]"
      >
        <div className="flex flex-row justify-start items-center ml-10 font-semibold">
          <div className="bg-white px-7 py-3 rounded-t-[20px]">내가 만든 스터디</div>
          <Link href={'/mystudy/applied'}>
            <div className="bg-primary-100 px-7 py-3 rounded-t-[20px] border border-b-0 border-primary-gray939 border-opacity-40 text-primary-gray939 transition-all duration-300 hover:bg-primary-300 hover:text-white cursor-pointer">
              내가 지원한 스터디
            </div>
          </Link>
        </div>
        <div className=" w-[1000px] bg-white rounded-[40px] ">
          <div
            className="ml-10 mt-5 text-primary-gray939 text-[12px] font-medium"
            dangerouslySetInnerHTML={{ __html: studyCreatedConstants.description }}
          />
          <div className="flex flex-row flex-wrap justify-center items-center pb-[30px] y-10 mb-[40px] gap-x-[40px]">
            {studyDatas.map((studyData) => (
              <StudyCreatedCard key={studyData.id} studyData={studyData} studyDataId={userStudyData[0]._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
