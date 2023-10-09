import { QuestionContainer } from '@/app/study/_components'
import { ToggleGroup, ToggleItem } from '@/components'
import { STUDY_FIELDS } from '@/constants'
import { InnerSection, NextStepButton } from '../_components'
import type { CreateStudyPageProps } from '../_types'

export const Step1Page = ({ nextStep }: CreateStudyPageProps) => {
  return (
    <QuestionContainer title="만들고 싶은 스터디의 종류를 정해주세요!">
      <InnerSection subtitle="스터디 분야를 골라주세요.">
        <div className="w-full flex gap-[22px]">
          <ToggleGroup type="multiple">
            {STUDY_FIELDS.map((field, index) => (
              <ToggleItem value={field} key={index}>
                {field}
              </ToggleItem>
            ))}
          </ToggleGroup>
        </div>
      </InnerSection>
      <InnerSection subtitle="스터디명 상세 분야를 입력해주세요."></InnerSection>
      <div className="flex justify-end">
        <NextStepButton onClick={nextStep} />
      </div>
    </QuestionContainer>
  )
}
