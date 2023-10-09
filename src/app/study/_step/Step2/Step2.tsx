import { Counter, Input, Textarea } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { QuestionContainer } from '../../_components'
import { InnerSection, NextStepButton } from '../_components'
import type { Step2Values } from '../_schema/step.schema'
import { STEP2_SCHEMA } from '../_schema/step.schema'
import type { CreateStudyPageProps } from '../_types'

export const Step2Page = ({ nextStep }: CreateStudyPageProps) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
    getValues,
  } = useForm<Step2Values>({
    resolver: yupResolver(STEP2_SCHEMA),
    defaultValues: {
      minMemberCount: 2,
    },
  })

  const onClickNextStep = (data: Step2Values) => {
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onClickNextStep)}>
      <QuestionContainer title="만들고 싶은 스터디에 대해 설명해주세요!">
        <InnerSection subtitle="스터디명을 작성해주세요(10자 이상)">
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} placeholder="스터디명을 작성해주세요." />
            )}
          />
        </InnerSection>
        <InnerSection subtitle="스터디 내용을 작성해주세요(10자 이상)">
          <Controller
            name="content"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Textarea
                value={value}
                onChange={onChange}
                placeholder="스터디 목표나 어떤 활동을 하게 될지 작성해주세요! 자세하게 작성할 수록 스터디 모집에 도움이 될 거에요!"
              />
            )}
          />
        </InnerSection>
        <InnerSection subtitle="스터디 최소 인원">
          <Controller
            name="minMemberCount"
            control={control}
            render={({ field: { onChange, value } }) => <Counter count={value} onChange={onChange} minCount={2} />}
          />
        </InnerSection>
        <div className="flex justify-end">
          <NextStepButton type="button" disabled={!getValues('title') || !isValid} />
        </div>
      </QuestionContainer>
    </form>
  )
}
