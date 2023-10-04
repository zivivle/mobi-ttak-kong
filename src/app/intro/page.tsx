import { Button } from '@/components'
import { CarouselButton, IntroSectionFirst, IntroSectionSecond, IntroSectionThird } from './_components'
import { siteConfig } from '@/constants/main'
import Image from 'next/image'
import bgImage from '/public/image/intro-bg1.webp'

export default function IntroPage() {
  return (
    <div className="relative h-screen overflow-auto">
      <div className="absolute inset-0 z-[-1]">
        <Image src={bgImage} alt="backgroundImage" layout="fill" objectFit="cover" />
      </div>
      <div className="h-screen flex flex-col items-left justify-center ">
        <div className="ml-165">
          <h1 className="font-bold text-38 mb-35">{siteConfig.description}</h1>
          <div>
            <Button className="w-217 h-60 text-white rounded-[20px]" fontSize={'xl'}>
              딱콩 시작하기
            </Button>
          </div>
        </div>
        <div className="fixed left-95 top-1/2 transform -translate-y-1/2 space-y-5">
          <CarouselButton numButtons={4} />
        </div>
      </div>
      <IntroSectionFirst />
      <IntroSectionSecond />
      <IntroSectionThird />
    </div>
  )
}
