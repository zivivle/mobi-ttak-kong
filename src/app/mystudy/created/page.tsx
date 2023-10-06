import Link from 'next/link'
import { StudyCreatedCard } from './_components'
import { studyCreatedConstants } from '@/constants'

export default function StudyCreatedPage() {
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
            <StudyCreatedCard />
            <StudyCreatedCard />
          </div>
        </div>
      </div>
    </div>
  )
}
