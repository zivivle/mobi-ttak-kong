import Image from 'next/image'
import test from '../../../../../../../public/image/intro-screen1.png'

export const InfoListR = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-20 mb-20">
      <div className="flex flex-col justify-center text-[24px] font-bold ">
        <div className="text-primary-300 mb-4">Step 2.</div>
        <div className="text-[20px] mb-2">대면 / 비대면 여부와 희망 스터디 장소를 선택해주세요!</div>
        <div className="text-primary-gray text-[16px] opacity-70">
          상세 분야까지 선택하면 스터디 매칭 확률이 올라갑니다.
        </div>
      </div>
      <div className="bg-primary-50 w-[700px] p-10 rounded-[20px]">
        <Image src={test} alt="testlogo" width={700} height={200} />
      </div>
    </div>
  )
}
