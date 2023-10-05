import Link from 'next/link'
import { StudyCreatedCard } from './_components'

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
          <div className="ml-10 mt-5 text-primary-gray939 text-[12px] font-medium">
            최소 인원이 채워지면 자동으로 마감이 돼요. <br /> 그 전에 스터디를 시작하고 싶다면, 마감하기를 통해 바로
            스터디를 시작해보세요!
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center pb-[30px] y-10 mb-[40px] gap-x-[40px]">
            <StudyCreatedCard />
            <StudyCreatedCard />
          </div>
        </div>
      </div>
    </div>
  )
}
