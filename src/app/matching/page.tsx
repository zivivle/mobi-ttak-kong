'use client'
import { useState } from 'react'
import { NoMatchingCard } from './_components/NoMatchingCard'
import { MatchingCard } from './_components'

export default function StudyMatchingPage() {
  const [testData, setTestData] = useState([
    {
      id: `${Math.floor(Date.now())}${Math.floor(Math.random() * 1000000)}`,
      label: '프론트엔드 스터디',
      title: '우리는 프론트 마스터즈',
      content:
        '안녕하세요! 웹 개발의 중심, 프론트엔드에 관심 있으신 분들을 위한 스터디를 시작합니다. 초보자부터 경험자까지, 함께 성장하고 싶은 분들의 많은 참여를 바랍니다.',
    },
  ])

  return (
    <div
      className={`${
        testData.length === 0 || testData.length === 1 ? 'h-screen' : 'h-auto'
      } bg-primary-50 flex flex-col px-[100px]`}
    >
      <div className="flex justify-start text-[26px] font-bold pt-[100px] pb-[30px]">스터디 매칭 현황</div>
      <div
        className={`${
          testData.length === 0 || testData.length === 1 ? 'h-[500px]' : 'h-auto'
        } bg-white flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[20px] mb-[40px] gap-x-[120px]`}
      >
        {testData.length > 0 &&
          testData.map((data) => (
            <MatchingCard key={data.id} id={data.id} label={data.label} title={data.title} content={data.content} />
          ))}
      </div>
    </div>
  )
}
