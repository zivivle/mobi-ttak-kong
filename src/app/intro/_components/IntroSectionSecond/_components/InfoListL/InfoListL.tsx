import Image from 'next/image'
import { InfoDataType } from '../../introSectionSecond.type'

export const InfoListL = ({ introInfo }: { introInfo: InfoDataType }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-20 mb-20">
      <div className="bg-primary-50 w-[700px] p-10 rounded-[20px]">
        <Image src={introInfo.image} alt="testlogo" width={700} height={200} />
      </div>
      <div className="flex flex-col justify-center text-[24px] font-bold">
        <div className="text-primary-300 mb-4">{introInfo.step}</div>
        <div className="text-[20px] mb-2">{introInfo.description1}</div>
        <div className="text-primary-gray text-[16px] opacity-70">{introInfo.info}</div>
      </div>
    </div>
  )
}
