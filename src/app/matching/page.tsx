import { MatchingCard } from './_components/MatchingCard'
import { NoMatchingCard } from './_components/NoMatchingCard'

export default function StudyMatchingPage() {
  return (
    <div className="h-screen bg-primary-50 flex flex-col px-[50px] ">
      <div className="flex justify-start text-[26px] font-bold pt-[100px] pb-[30px]">스터디 매칭 현황</div>
      {/* <AppliedLoading /> */}
      {/* 매칭 데이터가 없을경우 AppliedLoading 보여지도록 함 */}
      <div className="bg-white flex flex-row justify-center items-center rounded-[40px] gap-[120px]">
        <MatchingCard />
        <NoMatchingCard />
      </div>
    </div>
  )
}
