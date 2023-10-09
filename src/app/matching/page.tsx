'use client'
import { useEffect, useState } from 'react'
import { NoMatchingCard } from './_components/NoMatchingCard'
import { MatchingCard, MatchingLoading } from './_components'
import { StudyDataType, UserDataType } from '@/types'

export default function StudyMatchingPage() {
  const [userStudyData, setUserStudyData] = useState<UserDataType[]>([])
  const studyDatas: StudyDataType[] = userStudyData[0]?.isMatchingStudy

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

  if (!studyDatas || studyDatas.length === 0) {
    return (
      <div
        className="
        h-screen bg-primary-50 flex flex-col px-[100px] pb-[100px]"
      >
        <div className="flex justify-start text-[26px] font-bold pt-[100px] pb-[30px]">스터디 매칭 현황</div>
        <MatchingLoading />
      </div>
    )
  }
  return (
    <div
      className={`${
        studyDatas.length === 0 || studyDatas.length === 1 ? 'h-screen' : 'h-auto'
      } bg-primary-50 flex flex-col px-[100px]`}
    >
      <div className="flex justify-start text-[26px] font-bold pt-[100px] pb-[30px]">스터디 매칭 현황</div>
      <div
        className={`${
          studyDatas.length === 0 || studyDatas.length === 1 ? 'h-[500px]' : 'h-auto'
        } bg-white flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[20px] mb-[40px] gap-x-[120px]`}
      >
        <div
          className={`${
            studyDatas.length === 0 || studyDatas.length === 1 ? 'h-[500px]' : 'h-auto'
          } bg-white flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[20px] mb-[40px] gap-x-[120px]`}
        >
          {studyDatas.map((studyData) => (
            <MatchingCard studyData={studyData} />
          ))}
          {studyDatas.length % 2 === 1 && <NoMatchingCard />}
        </div>
      </div>
    </div>
  )
}
