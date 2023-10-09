import { Button } from '@/components'
import Image from 'next/image'
import { SelectCardProps } from '.'
import { useRouter } from 'next/navigation'

export const SelectCard = ({ mypageInfo }: { mypageInfo: SelectCardProps }) => {
  const isSelectCardLeft = mypageInfo.id === 1
  const router = useRouter()

  const onClickToMatchingPage = () => {
    router.push('/matching')
  }

  const onClickToStudyCreatePage = () => {
    router.push('/study/create')
  }

  // 매칭 등록 페이지 완료되면 적용 예정
  // const onClickToStudyMatchPage = () => {
  //   router.push('/study/match')
  // }

  return (
    <div
      onClick={isSelectCardLeft ? onClickToMatchingPage : onClickToStudyCreatePage}
      className="bg-primary w-[460px] pt-[60px] pb-[20px] flex flex-col justify-center items-center w-[282px] rounded-[20px] hover:bg-primary-200 cursor-pointer transition-all duration-500"
    >
      <Image src={mypageInfo.image} alt="test" width={200} height={200} className="mb-[1px]" />
      <div className="mb-2 flex flex-col justify-center items-center text-[18px] ">
        <p className="text-primary-black font-bold text-[33px] mt-[15px]">{mypageInfo.title}</p>
        <p className="mt-[5px] text-primary-black font-bold text-[13px]">{mypageInfo.description}</p>
      </div>
      <Button
        variant={'secondary'}
        className={`border-[1.5px] border-solid border-primary-black text-[12px] text-primary-black my-[15px] w-[235px] h-[44px] ${
          isSelectCardLeft ? '' : 'invisible'
        }`}
      >
        등록한 스터디 매칭이 없다면? 여기로!
      </Button>
    </div>
  )
}
