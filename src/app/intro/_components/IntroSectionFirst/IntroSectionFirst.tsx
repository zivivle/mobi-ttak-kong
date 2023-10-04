import { sectionFirstConfig } from '@/config/sectionFirst'
import { InfoCard } from './_components'

export const IntroSectionFirst = () => {
  return (
    <div className="h-screen bg-white flex flex-col justify-center">
      <div className="flex justify-center items-center mb-10 text-[26px] font-bold">
        쏟아지는 스터디에, 검색부터 하고 있진 않으셨나요?
      </div>
      <div className="bg-primary-50 w-full flex flex-row justify-center gap-20  ">
        {sectionFirstConfig.description.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </div>
  )
}
