import Image from 'next/image'
import editIcon from '/public/image/level-image.png'
import { StudyCreatedCardProps } from '..'

export const StudyCreatedCard = ({ title, label, ...rest }: StudyCreatedCardProps) => {
  return (
    <div className="flex flex-row">
      <div className="w-[420px] bg-primary-50 rounded-[20px] p-[25px] mt-[30px] flex flex-row">
        <div>
          <div className=" flex flex-row items-center h-[30px] ">
            <div>
              <div className="text-[14px] flex flex-row items-center">
                <p className="font-bold">{title}</p>
                <p className="text-[12px] text-primary-gray200 ml-2 font-semibold">{label}</p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-primary-gray200 text-[13px] w-[240px]">{rest.content}</div>
          <div className=" flex flex-row justify-start text-[13px] mt-12 font-semibold">
            <p className="">
              현재 인원 / 최소 인원 ({rest.nowMemberCount} / {rest.minMemberCount})
            </p>
          </div>
        </div>
        <div className="w-[340px]">
          <div className="flex justify-end">
            <Image src={editIcon} alt="임시 이미지" width={20} height={10} />
          </div>
          <div className="bg-white rounded-[50%] ml-7 px-2 py-3 flex flex-col justify-center items-center mt-[20px]">
            <Image src={rest.levelImage} alt="임시 이미지" width={50} height={50} />
            <div>{rest.level}</div>
          </div>
          <div className="ml-7 flex justify-center bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white rounded-[20px] mt-4">
            <p>{rest.tag}</p>
          </div>
        </div>
      </div>
      {rest.isClosing ? (
        <div className="bg-primary-gray200 p-4 w-[10px] mt-[60px] mb-[30px] flex justify-center items-center inline-block text-white font-bold rounded-r-[15px] hover:bg-opacity-70 cursor-pointer transition-all duration-300">
          마감완료
        </div>
      ) : (
        <div className="bg-primary-300 p-4 w-[10px] mt-[60px] mb-[30px] flex justify-center items-center inline-block text-white font-bold rounded-r-[15px] hover:bg-opacity-70 cursor-pointer transition-all duration-300">
          마감하기
        </div>
      )}
    </div>
  )
}
