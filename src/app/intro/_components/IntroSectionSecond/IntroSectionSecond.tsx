import { sectionSecondConfig } from '@/constants/sectionSecond'

import Image from 'next/image'
import { StepCard } from './_components'

export const IntroSectionSecond = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="flex justify-center items-center mb-20 text-[26px] font-bold">
        나만의 스터디를 찾는 방법 3 STEP!
      </div>
      <div className="flex flex-row justify-center items-center gap-20 mb-20">
        <div className="bg-primary-50 w-[700px] p-10 rounded-[20px]">
          <Image src={sectionSecondConfig.description[0].image} alt="testlogo" width={700} height={200} />
        </div>
        <StepCard introInfo={sectionSecondConfig.description[0]} />
      </div>
      <div className="flex flex-row justify-center items-center gap-20 mb-20">
        <StepCard introInfo={sectionSecondConfig.description[2]} />
        <div className="bg-primary-50 w-[700px] p-10 rounded-[20px]">
          <Image src={sectionSecondConfig.description[2].image} alt="testlogo" width={700} height={200} />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-20 mb-20">
        <div className="bg-primary-50 w-[700px] p-10 rounded-[20px]">
          <Image src={sectionSecondConfig.description[1].image} alt="testlogo" width={700} height={200} />
        </div>
        <StepCard introInfo={sectionSecondConfig.description[1]} />
      </div>
    </div>
  )
}
