import { Counter, Input, Textarea } from '@/components'
import { useState } from 'react'
import { QuestionContainer } from '../../_components'
import { InnerSection, NextStepButton } from '../_components'
import type { CreateStudyPageProps } from '../_types'

export const Step2Page = ({ nextStep }: CreateStudyPageProps) => {
  // 퍼블리싱 용입니다. -> Counter와만 관련이 있는데 부모 컴포넌트에서 선언을 해
  // 다른 InnerSection까지 렌더링되는 문제를 개선해보려고 합니다.
  const [count, setCount] = useState(2)

  return (
    <QuestionContainer title="만들고 싶은 스터디에 대해 설명해주세요!">
      <InnerSection subtitle="스터디명을 작성해주세요.">
        <Input placeholder="스터디명을 작성해주세요." />
      </InnerSection>
      <InnerSection subtitle="스터디 내용을 작성해주세요.">
        <Textarea placeholder="스터디 목표나 어떤 활동을 하게 될지 작성해주세요! 자세하게 작성할 수록 스터디 모집에 도움이 될 거에요!" />
      </InnerSection>
      <InnerSection subtitle="스터디 최소 인원">
        <Counter count={count} onChange={setCount} minCount={2} />
      </InnerSection>
      <div className="flex justify-end">
        <NextStepButton onClick={nextStep} />
      </div>
    </QuestionContainer>
  )
}
