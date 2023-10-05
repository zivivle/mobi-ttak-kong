import { Button } from '@/components'
import Image from 'next/image'
import defaultProfile from '/public/image/default-profile-image.png'
import levelImage from '/public/image/level-image.png'

export const StudyAppliedCard = () => {
  return (
    <div className="w-[400px] bg-primary-50 rounded-[20px] p-[43px] mt-[30px]">
      <div className="mb-2 font-bold text-[16px] text-primary-gray200">프론트엔드 스터디</div>
      <div className="bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white inline-block rounded-[20px]">
        IT / 프로그래밍
      </div>
      <div className="mt-[18px] flex flex-row items-center h-[35px] ">
        <Image src={defaultProfile} alt="임시 이미지" width={45} height={40} />
        <div>
          <div className="ml-[15px] text-[14px] font-bold">우리는 프론트 마스터즈</div>
          <div className="ml-[15px] mt-1 flex flex-row">
            <Image src={levelImage} alt="임시 이미지" width={20} height={10} />
            <div className="ml-1 flex items-center text-[13px]">중급</div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] text-primary-gray200 text-[13px]">
        안녕하세요! 웹 개발의 중심, 프론트엔드에 관심 있으신 분들을 위한 스터디를 시작합니다. 초보자부터 경험자까지,
        함께 성장하고 싶은 분들의 많은 참여를 바랍니다.
      </div>
      <div className="flex flex-row text-[13px] mt-3 font-semibold">
        <p className="">현재 인원 / 최소 인원 (4 / 5)</p>
      </div>
      <div>
        <p className="text-[13px] mt-3 font-semibold">대면 스터디</p>
        <p className="text-[13px] ">장소 : 성동구 전체</p>
      </div>
      <div className="flex justify-end mt-[20px]">
        <Button variant={'secondary'} fontSize={'sm'} className="w-[120px] h-[30px] rounded-[20px]">
          자세히 보러가기
        </Button>
      </div>
    </div>
  )
}
