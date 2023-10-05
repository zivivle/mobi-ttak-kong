'use client'
import { useState } from 'react'
import { NoMatchingCard } from './_components/NoMatchingCard'

export default function StudyMatchingPage() {
  const [testData, setTestData] = useState([])

  return (
    <div
      className={`${
        testData.length === 0 || testData.length === 1 ? 'h-screen' : 'h-auto'
      } bg-primary-50 flex flex-col px-[100px]`}
    >
      <div className="flex justify-start text-[26px] font-bold pt-[100px] pb-[30px]">스터디 매칭 현황</div>
      {/* <AppliedLoading /> */}
      {/* 매칭 데이터가 없을경우 AppliedLoading 보여지도록 함 */}
      <div
        className={`${
          testData.length === 0 || testData.length === 1 ? 'h-[500px]' : 'h-auto'
        } bg-white flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[20px] mb-[40px] gap-x-[120px]`}
      >
        {testData.length === 0 ? (
          <>
            <NoMatchingCard />
            <NoMatchingCard />
          </>
        ) : null}
        {/* 목데이터 정리후 구현 예정입니다! */}
        {/* {testData.length === 1 ? (
          <>
            <MatchingCard />
            <NoMatchingCard />
          </>
        ) : null}
        {testData.length === 2 ? (
          <>
            <MatchingCard />
            <MatchingCard />
          </>
        ) : null}
        {testData.length === 3 ? (
          <>
            <MatchingCard />
            <MatchingCard />
            <MatchingCard />
            <NoMatchingCard />
          </>
        ) : null} */}
      </div>
    </div>
  )
}
