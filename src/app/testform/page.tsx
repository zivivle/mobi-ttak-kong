'use client'

import { Button } from '@/components'
import axios from 'axios'
import { useState } from 'react'

const TestPage = () => {
  const [studyData, setStudyData] = useState({
    field: '',
    detailField: '',
    title: '',
    content: '',
    minMemberCount: 2,
    nowMemberCount: 1,
    level: '',
    isInPerson: true,
    location: '',
    isClosed: false,
    isAppliedMember: [],
    isMember: [],
  })
  const [userData, setUserData] = useState({
    name: 'user1',
    email: 'usertest@gmail.com',
    myMatchingData: [
      {
        id: 1,
        field: '',
        detailField: '',
        level: '',
        isInPerson: true,
        location: '',
      },
    ],
    isAppliedStudy: [
      {
        id: 1,
        field: 'IT / 프로그래밍',
        detailField: '프론트엔드 스터디',
        title: '초보자를 위한 React 입문 스터디',
        content: 'React의 기초부터 시작하여, 간단한 프로젝트까지 만들어봅니다.',
        minMemberCount: 3,
        nowMemberCount: 1,
        level: '초보',
        isInPerson: true,
        location: '서울',
        isClosed: false,
        isAppliedMember: [],
        isMember: [],
      },
      {
        id: 2,
        field: 'IT / 프로그래밍',
        detailField: '프론트엔드 스터디',
        title: 'HTML/CSS 기초부터 시작하는 웹 개발 스터디',
        content: '웹 개발의 기초인 HTML과 CSS를 아주 천천히 함께 배워봅시다!',
        minMemberCount: 4,
        nowMemberCount: 1,
        level: '초보',
        isInPerson: true,
        location: '서울',
        isClosed: false,
        isAppliedMember: [],
        isMember: [],
      },
      {
        id: 3,
        field: 'IT / 프로그래밍',
        detailField: '프론트엔드 스터디',
        title: 'JavaScript로 만드는 첫번째 프로젝트',
        content: '초보자를 위한 자바스크립트 스터디! 함께 기초부터 천천히 알아봅시다.',
        minMemberCount: 5,
        nowMemberCount: 2,
        level: '초보',
        isInPerson: true,
        location: '서울',
        isClosed: false,
        isAppliedMember: [],
        isMember: [],
      },
    ],
    isMatchingStudy: [
      {
        id: 4,
        field: 'IT / 프로그래밍',
        detailField: '프론트엔드 스터디',
        title: 'Bootstrap을 활용한 반응형 웹 제작 스터디',
        content: 'Bootstrap을 사용하여 간단하게 반응형 웹 페이지를 제작해봅시다.',
        minMemberCount: 5,
        nowMemberCount: 2,
        level: '초보',
        isInPerson: true,
        location: '서울',
        isClosed: false,
        isAppliedMember: [],
        isMember: [],
      },
    ],
    isCreatedStudy: [
      {
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
      },
    ],
  })

  // 핸들러 함수
  const handleStudyInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStudyData({
      ...studyData,
      [e.target.name]: e.target.value,
    })
  }

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserData((prevState) => {
      const newMatchingData = prevState.myMatchingData.map((data, index) => {
        if (index === 0) {
          return { ...data, [name]: value }
        }
        return data
      })

      return { ...prevState, myMatchingData: newMatchingData }
    })
  }

  // 데이터 전송 함수
  const submitStudyData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await axios.post('/api/study/add', studyData)
      alert('스터디 데이터 전송 성공')
    } catch (error) {
      alert('스터디 데이터 전송 실패')
      console.error(error)
    }
  }

  const submitUserData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await axios.post('/api/user/add', userData)
      alert('유저 데이터 전송 성공')
    } catch (error) {
      alert('유저 데이터 전송 실패')
      console.error(error)
    }
  }

  return (
    <div className="p-20">
      <h4>스터디 작성</h4>
      <form className="flex flex-col" onSubmit={submitStudyData}>
        <input
          type="text"
          name="field"
          placeholder="field 입력해주셈"
          value={studyData.field}
          onChange={handleStudyInputChange}
        />
        <input
          type="text"
          name="detailField"
          placeholder="detailField 입력해주셈"
          value={studyData.detailField}
          onChange={handleStudyInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title 입력해주셈"
          value={studyData.title}
          onChange={handleStudyInputChange}
        />
        <textarea
          name="content"
          placeholder="content 입력해주셈"
          value={studyData.content}
          onChange={handleStudyInputChange}
        />
        <input
          type="text"
          name="minMemberCount"
          placeholder="minMemberCount 입력해주셈"
          value={studyData.minMemberCount}
          onChange={handleStudyInputChange}
        />
        <input
          type="text"
          name="nowMemberCount"
          placeholder="nowMemberCount 입력해주셈"
          value={studyData.nowMemberCount}
          onChange={handleStudyInputChange}
        />
        <input
          type="text"
          name="level"
          placeholder="level 입력해주셈"
          value={studyData.level}
          onChange={handleStudyInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="location 입력해주셈"
          value={studyData.location}
          onChange={handleStudyInputChange}
        />
        <Button type="submit">전송</Button>
      </form>
      <h4>유저 매칭 정보 작성</h4>
      <form className="flex flex-col" onSubmit={submitUserData}>
        <input
          type="text"
          name="field"
          placeholder="field 입력해주셈"
          value={userData.myMatchingData[0].field}
          onChange={handleUserInputChange}
        />
        <input
          type="text"
          name="detailField"
          placeholder="detailField 입력해주셈"
          value={userData.myMatchingData[0].detailField}
          onChange={handleUserInputChange}
        />
        <input
          type="text"
          name="level"
          placeholder="level 입력해주셈"
          value={userData.myMatchingData[0].level}
          onChange={handleUserInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="location 입력해주셈"
          value={userData.myMatchingData[0].location}
          onChange={handleUserInputChange}
        />

        <Button type="submit">전송</Button>
        <Button type="submit">수정</Button>
      </form>
    </div>
  )
}

export default TestPage
