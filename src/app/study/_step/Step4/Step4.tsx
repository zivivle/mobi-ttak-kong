import { RadioGroup, RadioGroupItem } from '@/components'
import { QuestionContainer } from '../../_components'
import { InnerSection, NextStepButton } from '../_components'
import type { CreateStudyPageProps } from '../_types'

export const Step4Page = ({ nextStep }: CreateStudyPageProps) => {
  return (
    <QuestionContainer title="혹시 원하는 스터디 장소가 있나요?">
      <InnerSection subtitle="대면 / 비대면을 선택해주세요.">
        <RadioGroup defaultValue="offline" className="flex gap-[30px]">
          <div className="flex items-center space-x-2">
            <label htmlFor="offline" className="cursor-pointer">
              대면 스터디
            </label>
            <RadioGroupItem value="offline" id="offline" />
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="online" className="cursor-pointer">
              비대면 스터디
            </label>
            <RadioGroupItem value="online" id="online" />
          </div>
        </RadioGroup>
      </InnerSection>
      <InnerSection subtitle="스터디 장소 지역을 검색해주세요."></InnerSection>
      <div className="flex justify-end">
        <NextStepButton onClick={nextStep} />
      </div>
    </QuestionContainer>
  )
}
