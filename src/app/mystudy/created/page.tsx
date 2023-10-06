'use client'

import levelImage from '/public/image/emoji-bbiyak.png'
import Link from 'next/link'
import { StudyCreatedCard } from './_components'
import { studyCreatedConstants } from '@/constants'
import { useState } from 'react'

export default function StudyCreatedPage() {
  const [testData, setTestData] = useState([
    {
      id: `${Math.floor(Date.now())}${Math.floor(Math.random() * 1000000)}`,
      title: '우리는 프론트 마스터즈',
      label: '프론트엔드 스터디',
      content:
        '안녕하세요! 웹 개발의 중심, 프론트엔드에 관심 있으신 분들을 위한 스터디를 시작합니다. 초보자부터 경험자까지, 함께 성장하고 싶은 분들의 많은 참여를 바랍니다.',
      nowMemberCount: 4,
      minMemberCount: 5,
      levelImage,
      level: '초보',
      tag: 'IT / 프로그래밍',
      isClosing: false,
    },
  ])

  return (
    <div className="h-screen flex justify-center items-center  bg-primary-50">
      <div
        className="
         h-auto flex flex-col px-[100px]"
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
            {testData.map((data) => (
              <StudyCreatedCard
                key={data.id}
                title={data.title}
                label={data.label}
                content={data.content}
                nowMemberCount={data.nowMemberCount}
                minMemberCount={data.minMemberCount}
                levelImage={data.levelImage}
                level={data.level}
                tag={data.tag}
                isClosing={data.isClosing}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
