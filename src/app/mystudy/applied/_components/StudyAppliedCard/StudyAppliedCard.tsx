import { Button } from '@/components'
import Image from 'next/image'
import defaultProfile from '/public/image/default-profile-image.png'
import levelImage from '/public/image/level-image.png'
import { StudyAppliedCardProps } from '..'
import Link from 'next/link'

export const StudyAppliedCard = ({ id, label, tag, ...rest }: StudyAppliedCardProps) => {
  return (
    <div className="w-[400px] bg-primary-50 rounded-[20px] p-[43px] mt-[30px]">
      <div className="mb-2 font-bold text-[16px] text-primary-gray200">{label}</div>
      <div className="bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white inline-block rounded-[20px]">
        {tag}
      </div>
      <div className="mt-[18px] flex flex-row items-center h-[35px] ">
        <Image src={defaultProfile} alt="임시 이미지" width={45} height={40} />
        <div>
          <div className="ml-[15px] text-[14px] font-bold">{rest.title}</div>
          <div className="ml-[15px] mt-1 flex flex-row">
            <Image src={levelImage} alt="임시 이미지" width={20} height={10} />
            <div className="ml-1 flex items-center text-[13px]">{rest.level}</div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] text-primary-gray200 text-[13px]">{rest.content}</div>
      <div className="flex flex-row text-[13px] mt-3 font-semibold">
        <p className="">
          현재 인원 / 최소 인원 ({rest.nowMemberCount} / {rest.minMemberCount})
        </p>
      </div>
      <div>
        <p className="text-[13px] mt-3 font-semibold">{rest.isInPerson ? '대면 스터디' : '비대면 스터디'}</p>
        <p className="text-[13px] ">장소 : {rest.location}</p>
      </div>
      <div className="flex justify-end mt-[20px]">
        <Link href={'/mystudy/applied/${id}'}>
          <Button variant={'secondary'} fontSize={'sm'} className="w-[120px] h-[30px] rounded-[20px]">
            자세히 보러가기
          </Button>
        </Link>
      </div>
    </div>
  )
}
