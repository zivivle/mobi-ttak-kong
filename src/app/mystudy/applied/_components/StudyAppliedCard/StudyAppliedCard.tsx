'use client'
import { Button } from '@/components'
import Image from 'next/image'
import defaultProfile from '/public/image/default-profile-image.png'
import levelImage from '/public/image/level-image.png'
import { StudyDataType } from '@/types'
import { useRouter } from 'next/navigation'

export const StudyAppliedCard = ({ studyData }: { studyData: StudyDataType }) => {
  const router = useRouter()

  const onClickToStudyDetailPage = () => {
    router.push(`/mystudy/applied/${studyData.id}`)
  }

  return (
    <div className="w-[400px] bg-primary-50 rounded-[20px] p-[43px] mt-[30px] shadow-md">
      <div className="mb-2 font-bold text-[16px] text-primary-gray200">{studyData.field}</div>
      <div className="bg-primary-300 shadow-md px-3 py-1 text-[12px] font-semibold text-white inline-block rounded-[20px]">
        {studyData.detailField}
      </div>
      <div className="mt-[18px] flex flex-row items-center h-[35px] ">
        <Image src={defaultProfile} alt="임시 이미지" width={45} height={40} />
        <div>
          <div className="ml-[15px] text-[14px] font-bold">{studyData.title}</div>
          <div className="ml-[15px] mt-1 flex flex-row">
            <Image src={levelImage} alt="임시 이미지" width={20} height={10} />
            <div className="ml-1 flex items-center text-[13px]">{studyData.level}</div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] text-primary-gray200 text-[13px]">
        {studyData.content.length > 40 ? (
          <span dangerouslySetInnerHTML={{ __html: studyData.content.slice(0, 40) + '...' }} />
        ) : (
          <span dangerouslySetInnerHTML={{ __html: studyData.content }} />
        )}
      </div>
      <div className="flex flex-row text-[13px] mt-3 font-semibold">
        <p className="">
          현재 인원 / 최소 인원 ({studyData.nowMemberCount} / {studyData.minMemberCount})
        </p>
      </div>
      <div>
        <p className="text-[13px] mt-3 font-semibold">{studyData.isInPerson ? '대면 스터디' : '비대면 스터디'}</p>
        <p className="text-[13px] ">장소 : {studyData.location}</p>
      </div>
      <div className="flex justify-end mt-[20px]">
        <Button
          onClick={onClickToStudyDetailPage}
          variant={'secondary'}
          fontSize={'sm'}
          className="w-[120px] h-[30px] rounded-[20px] shadow-md"
        >
          자세히 보러가기
        </Button>
      </div>
    </div>
  )
}
