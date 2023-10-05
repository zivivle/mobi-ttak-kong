import Image from 'next/image'
import defaultProfile from '/public/image/default-profile-image.png'
import { Button } from '@/components'

export const MatchingCard = () => {
  return (
    <div className="w-[500px] bg-primary-50 rounded-[20px] p-[50px] ">
      <div className="mb-2 font-bold text-[16px] text-primary-gray200">프론트엔드 스터디</div>
      <div className="flex flex-row items-center h-[35px]">
        <Image src={defaultProfile} alt="임시 이미지" width={35} height={40} />
        <div className="ml-[15px] font-bold">우리는 프론트 마스터즈</div>
      </div>
      <div className="mt-[20px] text-primary-gray200 text-[13px]">
        안녕하세요! 웹 개발의 중심, 프론트엔드에 관심 있으신 분들을 위한 스터디를 시작합니다. 초보자부터 경험자까지,
        함께 성장하고 싶은 분들의 많은 참여를 바랍니다.
      </div>
      <div className="flex justify-between mt-[20px]">
        <Button className="w-[140px] h-[35px] rounded-[20px]">지원하기</Button>
        <Button variant={'secondary'} className="w-[140px] h-[35px] rounded-[20px]">
          자세히 보러가기
        </Button>
      </div>
    </div>
  )
}
