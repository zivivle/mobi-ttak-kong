import { StudyAppliedCard } from './_components'

export default function StudyAppliedPage() {
  return (
    <div className="h-screen flex justify-center items-center  bg-primary-50">
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <div className=" w-[950px] bg-white mt-[150px] flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[30px] mb-[40px] gap-x-[40px]">
          <StudyAppliedCard />
          <StudyAppliedCard />
          {/* <StudyAppliedCard />
          <StudyAppliedCard /> */}
        </div>
      </div>
    </div>
  )
}
