import { InfoDataType } from '../../introSectionSecond.type'

export const StepCard = ({ introInfo }: { introInfo: InfoDataType }) => {
  return (
    <div className="flex flex-col justify-center text-[24px] font-bold">
      <div className="text-primary-300 mb-4">{introInfo.step}</div>
      <div className="text-[20px] mb-2">{introInfo.description1}</div>
      <div className="text-primary-gray text-[16px] opacity-70">{introInfo.info}</div>
    </div>
  )
}
