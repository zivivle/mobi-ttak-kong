'use client'
import { useState } from 'react'
import { NoMatchingCard } from './_components/NoMatchingCard'
import { MatchingCard, MatchingLoading } from './_components'
import { StudyData, userMatchingData } from '@/mocks'

export default function StudyMatchingPage() {
  const matchedStudies = StudyData.filter((study) => {
    return userMatchingData.some((userMatch) => {
      return (
        study.field === userMatch.field &&
        study.detailField === userMatch.detailField &&
        study.level === userMatch.level &&
        study.isInPerson === userMatch.isInPerson &&
        study.location === userMatch.location
      )
    })
  })

  console.log(matchedStudies)

  return (
    <div className={`${matchedStudies.length < 3 ? 'h-screen' : 'h-auto'} bg-primary-50 flex flex-col px-[100px]`}>
      {!matchedStudies || matchedStudies.length === 0 ? (
        <MatchingLoading />
      ) : (
        <div>
          <div className="flex justify-start text-[26px] font-bold pt-[100px] pb-[30px]">스터디 매칭 현황</div>
          <div
            className={`${
              matchedStudies.length === 0 || matchedStudies.length === 1 ? 'h-[500px]' : 'h-auto'
            } bg-white flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[20px] mb-[40px] gap-x-[120px]`}
          >
            {matchedStudies.length > 0 &&
              matchedStudies.map((data) => (
                <MatchingCard key={data.id} id={data.id} label={data.field} title={data.title} content={data.content} />
              ))}
            {matchedStudies.length % 2 === 1 && <NoMatchingCard />}
          </div>
        </div>
      )}
    </div>
  )
}
