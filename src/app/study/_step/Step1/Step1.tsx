'use client'

import { QuestionContainer } from '@/app/study/_components'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, ToggleGroup, ToggleItem } from '@/components'
import { STUDY_DETAIL_FIELDS, STUDY_FIELDS } from '@/constants'
import type { StudyFieldsProps } from '@/types'
import { useState } from 'react'
import { InnerSection, NextStepButton } from '../_components'
import type { CreateStudyPageProps } from '../_types'

export const Step1Page = ({ nextStep }: CreateStudyPageProps) => {
  const [selectField, setField] = useState<StudyFieldsProps | undefined>(undefined)
  const [selectedDetailField, setDetailField] = useState<string | undefined>(undefined)

  const onClickField = (filed: StudyFieldsProps) => {
    setField(filed)
    setDetailField(undefined) // 다른 카테고리를 선택했을 시 상세분류 초기화
  }

  const onClickDetailField = (detailField: string) => {
    setDetailField(detailField)
  }

  return (
    <QuestionContainer title="만들고 싶은 스터디의 종류를 정해주세요!">
      <InnerSection subtitle="스터디 분야를 골라주세요.">
        <div className="w-full flex gap-[22px]">
          <ToggleGroup type="multiple">
            {STUDY_FIELDS.map((field, index) => (
              <ToggleItem
                className={`${field === selectField && 'bg-primary-300 text-white font-semibold'}`} // 바깥을 클릭했을 때 select가 풀리는 문제 방지
                value={field}
                key={index}
                onClick={() => onClickField(field)}
              >
                {field}
              </ToggleItem>
            ))}
          </ToggleGroup>
        </div>
      </InnerSection>
      <InnerSection subtitle="스터디 상세 분야를 선택해주세요.">
        <Select onValueChange={onClickDetailField} key={selectField}>
          <SelectTrigger className="w-6/12">
            <SelectValue
              placeholder={!selectField ? '스터디 분야를 먼저 선택해주세요' : '스터디 상세 분야를 선택해주세요'}
            />
          </SelectTrigger>
          {selectField && (
            <SelectContent>
              {STUDY_DETAIL_FIELDS[selectField].map((detail) => (
                <SelectItem key={detail} value={detail} onClick={() => onClickDetailField(detail)}>
                  {detail}
                </SelectItem>
              ))}
            </SelectContent>
          )}
        </Select>
      </InnerSection>
      <div className="flex justify-end">
        <NextStepButton onClick={nextStep} disabled={!selectField || !selectedDetailField} />
      </div>
    </QuestionContainer>
  )
}
