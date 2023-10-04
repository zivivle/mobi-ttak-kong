import { sectionSecondConfig } from '@/constants/sectionSecond'
import { ImageCardPair } from './_components'

export const IntroSectionSecond = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="flex justify-center items-center mb-20 text-[26px] font-bold">
        나만의 스터디를 찾는 방법 3 STEP!
      </div>
      <ImageCardPair
        imageSrc={sectionSecondConfig.description[0].image}
        introInfo={sectionSecondConfig.description[0]}
        imageOnLeft={true}
      />
      <ImageCardPair
        imageSrc={sectionSecondConfig.description[2].image}
        introInfo={sectionSecondConfig.description[2]}
        imageOnLeft={false}
      />
      <ImageCardPair
        imageSrc={sectionSecondConfig.description[1].image}
        introInfo={sectionSecondConfig.description[1]}
        imageOnLeft={true}
      />
    </div>
  )
}
