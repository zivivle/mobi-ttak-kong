import { Button } from '@/components'
import { CarouselButton, IntroSectionFirst, IntroSectionSecond, IntroSectionThird } from './_components'
import { siteConfig } from '@/config/main'

export default function IntroPage() {
  return (
    <div
      style={{
        backgroundImage: "url('/image/intro-bg1.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-screen overflow-auto"
    >
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
