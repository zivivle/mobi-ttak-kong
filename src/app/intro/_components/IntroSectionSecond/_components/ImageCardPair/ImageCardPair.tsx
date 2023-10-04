import Image from 'next/image'
import { StepCard } from '..'
import type { ImageCardPairProps } from './ImageCardPair.type'

export const ImageCardPair = ({ imageSrc, introInfo, imageOnLeft }: ImageCardPairProps) => {
  return (
    <div className="flex flex-row justify-center items-center gap-20 mb-20">
      {imageOnLeft && (
        <div className="bg-primary-50 w-[700px] p-10 rounded-[20px]">
          <Image src={imageSrc} alt="Step Image" width={700} height={200} />
        </div>
      )}
      <StepCard introInfo={introInfo} />
      {!imageOnLeft && (
        <div className="bg-primary-50 w-[700px] p-10 rounded-[20px]">
          <Image src={imageSrc} alt="Step Image" width={700} height={200} />
        </div>
      )}
    </div>
  )
}
