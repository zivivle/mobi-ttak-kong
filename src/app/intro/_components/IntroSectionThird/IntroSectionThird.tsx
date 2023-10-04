import { Button } from '@/components'
import { siteConfig } from '@/config/main'

export const IntroSectionThird = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/image/intro-bg2.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-screen flex flex-col items-left justify-center p-20"
    >
      <div className="flex flex-col items-center justify-center mt-[200px]">
        <h1 className="font-bold text-[30px] mb-35 flex flex-col items-center justify-center">
          <p>{siteConfig.description2}</p>
          <p>{siteConfig.description3}</p>
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
