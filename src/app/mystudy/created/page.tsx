'use client'

import { StudyCreatedCard } from './_components'
import { studyCreatedConstants } from '@/constants'
import { useRouter } from 'next/navigation'
import { userCreatedStudyData } from '@/mocks'
import { StudyCreatedEmptyCard } from './_components/StudyCreatedEmptyCard'

export default function StudyCreatedPage() {
  const studyData = userCreatedStudyData

  const router = useRouter()

  const onClickToMyCreatedStudy = () => {
    router.push('/mystudy/applied')
  }

  return (
    <div className="h-screen flex justify-center items-center  bg-primary-50">
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <div className="flex flex-row justify-start items-center ml-10 font-semibold">
          <div className="bg-white px-7 py-3 rounded-t-[20px]">내가 만든 스터디</div>

          <div
            onClick={onClickToMyCreatedStudy}
            className="bg-primary-100 px-7 py-3 rounded-t-[20px] border border-b-0 border-primary-gray939 border-opacity-40 text-primary-gray939 transition-all duration-300 hover:bg-primary-300 hover:text-white cursor-pointer"
          >
            내가 지원한 스터디
          </div>
        </div>
        <div className=" w-[1000px] bg-white rounded-[40px] ">
          <div
            className="ml-10 mt-5 text-primary-gray939 text-[12px] font-medium"
            dangerouslySetInnerHTML={{ __html: studyCreatedConstants.description }}
          />
          <div className="flex flex-row flex-wrap justify-center items-center pb-[30px] y-10 mb-[40px] gap-x-[40px]">
            {studyData.map((data) => (
              <StudyCreatedCard
                key={data.id}
                id={data.id}
                field={data.field}
                detailField={data.detailField}
                title={data.title}
                content={data.content}
                minMemberCount={data.minMemberCount}
                nowMemberCount={data.nowMemberCount}
                level={data.level}
                isInPerson={data.isInPerson}
                location={data.location}
                isClosed={data.isClosed}
              />
            ))}
            {studyData.length === 0 || (studyData.length % 2 === 1 && <StudyCreatedEmptyCard />)}
          </div>
        </div>
      </div>
    </div>
  )
}
