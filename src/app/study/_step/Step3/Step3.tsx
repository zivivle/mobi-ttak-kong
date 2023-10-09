import { ToggleGroup } from '@/components'
import type { LevelProps } from '@/types'
import { QuestionContainer } from '../../_components'
import { InnerSection, LevelCard, NextStepButton } from '../_components'
import type { CreateStudyPageProps } from '../_types'

export const Step3Page = ({ nextStep }: CreateStudyPageProps) => {
  const levelArray: LevelProps[] = ['누구나', '초급', '중급', '고급']

  return (
    <QuestionContainer title="원하는 스터디 레벨이 있나요?">
      <InnerSection subtitle="스터디 레벨을 선택해주세요." description="어느 정도 수준으로 진행이 되는지를 의미해요.">
        <ToggleGroup type="multiple">
          <div className="flex gap-[20px] mt-[50px]">
            {levelArray.map((level) => (
              <LevelCard key={level} level={level} />
            ))}
          </div>
        </ToggleGroup>
      </InnerSection>
      <div className="flex justify-end">
        <NextStepButton onClick={nextStep} />
      </div>
    </QuestionContainer>
  )
}
