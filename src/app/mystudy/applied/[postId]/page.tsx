import levelImage from '../../../../../public/image/level-image.png'
import Image from 'next/image'

export default function StudyAppliedDetailPage() {
  const example = {
    title: '우리는 프론트 마스터즈',
    content: `🌟 프론트엔드 스터디 모집! 🌟 <br/>
    안녕하세요! 웹 개발의 중심, 프론트엔드에 관심 있으신 분들을 위한 스터디를 시작합니다. <br/>
    초보자부터 경험자까지, 함께 성장하고 싶은 분들의 많은 참여를 바랍니다.<br/>
    <br/>
    📌 스터디 주제<br/>
    HTML, CSS 기본부터 고급 기법까지<br/>
    JavaScript ES6+ 핵심 개념 및 실습<br/>
    React, Vue 등 현대 프론트엔드 프레임워크 기초<br/>
    웹 성능 최적화 및 반응형 디자인<br/>
    <br/>
    <br/>
    📅 스터디 일정<br/>
    매주 토요일 오전 10시 ~ 오후 1시 (3시간)<br/>
    총 12주 동안 진행<br/>
    <br/>
    📍 모임 장소<br/>
    성동구 스타벅스<br/>
    <br/>
    🤝 스터디 방식<br/>
    매주 주제별 강의 및 실습<br/>
    프로젝트 기반 학습으로 실제 웹사이트 제작 경험<br/>
    코드 리뷰 및 피드백 세션`,
  }

  return (
    <div className="h-auto flex justify-center items-center  bg-primary-50">
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <div className=" w-[1000px] bg-white rounded-[20px] p-7 mt-[80px] mb-[40px] ">
          <div className="flex flex-row items-center mt-4">
            <div className=" bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white rounded-[20px] inline-block">
              <p>IT / 프로그래밍</p>
            </div>
            <div className=" bg-primary-50 px-3 py-1 text-[12px] inline-flex font-semibold text-primary-black rounded-[20px] gap-[1px]">
              <Image src={levelImage} alt="등급 이미지" width={20} height={10} />
              <p>중급</p>
            </div>
          </div>

          <div className=" mt-5 text-primary-gray939 text-[12px] font-medium">프론트엔드 스터디</div>
          <div className=" text-black text-[24px] font-bold">{example.title}</div>
          <div className=" mt-2 text-black text-[12px] font-bold">현재 인원 / 최소 인원 (4 / 5)</div>
          <div className=" mt-5 text-black text-[12px] font-bold">대면 스터디</div>
          <div className=" text-black text-[12px] font-medium">장소 : 성동구 전체</div>
          <div
            className="bg-primary-50 px-7 py-10 mt-5 text-black text-[14px] font-normal rounded-[20px]"
            dangerouslySetInnerHTML={{ __html: example.content }}
          />
        </div>
      </div>
    </div>
  )
}
