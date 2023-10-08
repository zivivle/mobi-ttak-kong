'use client'
import Link from 'next/link'
import { StudyAppliedCard } from './_components'
import { useEffect, useState } from 'react'
import { UserDataType, UserStudyDataType } from '@/types'

export default function StudyAppliedPage() {
  const [userStudyData, setUserStudyData] = useState<UserDataType[]>([])
  const studyDatas: UserStudyDataType = userStudyData[0]

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

  return (
    <div className="h-auto pt-[100px] flex justify-center items-center  bg-primary-50">
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <div className="flex flex-row justify-start items-center ml-10 font-semibold">
          <Link href={'/mystudy/created'}>
            <div className="bg-primary-100 px-7 py-3 rounded-t-[20px] border border-b-0 border-primary-gray939 border-opacity-40 text-primary-gray939 transition-all duration-300 hover:bg-primary-300 hover:text-white cursor-pointer">
              내가 만든 스터디
            </div>
          </Link>
          <div className="bg-white px-7 py-3 rounded-t-[20px]">내가 지원한 스터디</div>
        </div>

        {userStudyData.length > 0 && <StudyAppliedCard studyDatas={studyDatas} />}
      </div>
    </div>
  )
}
