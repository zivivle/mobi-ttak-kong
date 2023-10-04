import { InfoListL, InfoListR } from './_components'

export const IntroSectionSecond = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="flex justify-center items-center mb-20 text-[26px] font-bold">
        나만의 스터디를 찾는 방법 3 STEP!
      </div>
      <InfoListL />
      <InfoListR />
      <InfoListL />
    </div>
  )
}
