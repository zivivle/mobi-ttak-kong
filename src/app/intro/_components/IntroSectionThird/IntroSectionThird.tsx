import { Button } from '@/components'
import { siteConfig } from '@/constants/main'
import Image from 'next/image'
import bgImage from '/public/image/intro-bg2.webp'

export const IntroSectionThird = () => {
  return (
    <div className="relative h-screen flex flex-col items-left justify-center p-20">
      <div className="absolute inset-0 z-[-1] bottom-0 left-0 right-0">
        <Image src={bgImage} alt="backgroundImage" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center justify-center mt-[200px]">
        <h1 className="font-bold text-[30px] mb-35 flex flex-col items-center justify-center">
          <p>{siteConfig.description}</p>
        </h1>
        <div>
          <Button className="w-217 h-[55px] mt-[10px] rounded-[20px] text-white" fontSize={'xl'}>
            딱콩 시작하기
          </Button>
        </div>
      </div>
    </div>
  )
}
