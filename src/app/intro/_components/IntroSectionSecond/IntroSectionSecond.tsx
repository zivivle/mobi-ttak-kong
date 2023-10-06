import { sectionSecondConstants } from '@/constants/sectionSecond.constants'
import { ImageCardPair } from './_components'

export const IntroSectionSecond = () => {
  return (
    <div className="bg-white flex flex-col justify-center ">
      <div className="flex justify-center items-center mt-20 mb-20 text-[26px] font-bold">
        나만의 스터디를 찾는 방법 3 STEP!
      </div>
      <ImageCardPair
        imageSrc={sectionSecondConstants.description[0].image}
        introInfo={sectionSecondConstants.description[0]}
        imageOnLeft={true}
      />
      <ImageCardPair
        imageSrc={sectionSecondConstants.description[2].image}
        introInfo={sectionSecondConstants.description[2]}
        imageOnLeft={false}
      />
      <ImageCardPair
        imageSrc={sectionSecondConstants.description[1].image}
        introInfo={sectionSecondConstants.description[1]}
        imageOnLeft={true}
      />
    </div>
  )
}
