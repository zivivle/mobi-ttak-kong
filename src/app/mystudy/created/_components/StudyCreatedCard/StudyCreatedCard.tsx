import Image from 'next/image'
import editIcon from '/public/image/level-image.png'
import levelImage from '../../../../../../public/image/emoji-bbiyak.png'

export const StudyCreatedCard = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[420px] bg-primary-50 rounded-[20px] p-[25px] mt-[30px] flex flex-row">
        <div>
          <div className=" flex flex-row items-center h-[30px] ">
            <div>
              <div className="text-[14px] flex flex-row items-center">
                <p className="font-bold">우리는 프론트 마스터즈</p>
                <p className="text-[12px] text-primary-gray200 ml-2 font-semibold">프론트엔드 스터디</p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-primary-gray200 text-[13px] w-[240px]">
            안녕하세요! 웹 개발의 중심, 프론트엔드에 관심 있으신 분들을 위한 스터디를 시작합니다. 초보자부터 경험자까지,
            함께 성장하고 싶은 분들의 많은 참여를 바랍니다.
          </div>
          <div className=" flex flex-row justify-start text-[13px] mt-12 font-semibold">
            <p className="">현재 인원 / 최소 인원 (4 / 5)</p>
          </div>
        </div>
        <div className="w-[340px]">
          <div className="flex justify-end">
            <Image src={editIcon} alt="임시 이미지" width={20} height={10} />
          </div>
          <div className="bg-white rounded-[50%] ml-7 px-2 py-3 flex flex-col justify-center items-center mt-[20px]">
            <Image src={levelImage} alt="임시 이미지" width={50} height={50} />
            <div>초보</div>
          </div>
          <div className="ml-7 flex justify-center bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white rounded-[20px] mt-4">
            <p>IT / 프로그래밍</p>
          </div>
        </div>
      </div>
      <div className="bg-primary-300 p-4 w-[10px] mt-[60px] mb-[30px] flex justify-center items-center inline-block text-white font-bold rounded-r-[15px] hover:bg-opacity-70 cursor-pointer transition-all duration-300">
        마감하기
      </div>
      {/* <div className="bg-primary-gray200 p-4 w-[10px] mt-[60px] mb-[30px] flex justify-center items-center inline-block text-white font-bold rounded-r-[15px] hover:bg-opacity-70 cursor-pointer transition-all duration-300">
        마감완료
      </div> */}
    </div>
  )
}
