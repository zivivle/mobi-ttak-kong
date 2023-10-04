import { Button } from '@/components'
import { CarouselButton, IntroSectionFirst, IntroSectionSecond, IntroSectionThird } from './_components'
import { siteConfig } from '@/config/main'

export default function IntroPage() {
  return (
    <div className="h-screen overflow-auto">
      <div className="h-screen flex flex-col items-left justify-center bg-blue-200">
        <div className="ml-165">
          <h1 className="font-bold text-38 mb-35">{siteConfig.description}</h1>
          <div>
            <Button className="w-217 h-60 text-white" fontSize={'xl'}>
              딱콩 시작하기
            </Button>
          </div>
        </div>
        <div className="fixed left-95 top-1/2 transform -translate-y-1/2 space-y-5">
          <CarouselButton />
        </div>
      </div>
      <IntroSectionFirst />
      <IntroSectionSecond />
      <IntroSectionThird />
    </div>
  )
}
