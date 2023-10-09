'use client'

import Image from 'next/image'
import levelImage from '/public/image/level-image.png'
import { Button } from '@/components'
import { useState } from 'react'

export default function StudyEditPage() {
  const [studyFormData, setStudyFormData] = useState({
    id: 5,
    field: 'IT / 프로그래밍',
    detailField: '프론트엔드 스터디',
    title: '웹 퍼블리싱 배워보기',
    content: '웹 퍼블리싱의 기초를 배우며, 간단한 웹 페이지를 만들어봅니다.',
    minMemberCount: 4,
    nowMemberCount: 2,
    level: '초보',
    isInPerson: true,
    location: '서울',
    isClosed: false,
    isAppliedMember: [],
    isMember: [],
  })

  return (
    <form onSubmit={handleSubmit} className="h-auto flex justify-center items-center  bg-primary-50">
      <div
        className="
           h-auto flex flex-col px-[100px]"
      >
        <div className=" w-[1000px] bg-white rounded-[20px] p-7 mt-[80px] mb-[40px] ">
          <div className="flex flex-row items-center mt-4">
            <div className=" bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white rounded-[20px] inline-block">
              field
            </div>
            <div className=" bg-primary-50 px-3 py-1 text-[12px] inline-flex font-semibold text-primary-black rounded-[20px] gap-[1px]">
              <Image src={levelImage} alt="등급 이미지" width={20} height={10} />
              <input name="level" placeholder="레벨" onChange={handleChange} />
            </div>
          </div>

          <div className=" mt-5 text-primary-gray939 text-[12px] font-medium">detailField</div>
          <div className=" text-black text-[24px] font-bold">
            <input name="title" placeholder="제목" onChange={handleChange} />
          </div>
          <div className=" mt-2 text-black text-[12px] font-bold">
            현재 인원 / 최소 인원 (nowMemberCount /{' '}
            <input name="minMemberCount" placeholder="최소인원" onChange={handleChange} />)
          </div>
          <div className=" mt-5 text-black text-[12px] font-bold">
            <input name="isInPerson" placeholder="대면 비대면" onChange={handleChange} />
          </div>
          <div className=" text-black text-[12px] font-medium">
            장소 : <input name="location" placeholder="장소" onChange={handleChange} />
          </div>
          <div className="bg-primary-50 px-7 py-10 mt-5 text-black text-[14px] font-normal rounded-[20px]">
            <input name="content" placeholder="내용" onChange={handleChange} />
          </div>
          <div className="flex justify-center mt-5 ">
            <Button variant={'secondary'} className="w-[220px] rounded-[20px] mt-2 mb-4">
              스터디 수정 저장하기
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
