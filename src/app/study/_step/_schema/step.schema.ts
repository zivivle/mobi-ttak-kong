import { STUDY_FIELDS } from '@/constants'
import type { LevelProps } from '@/types'
import * as yup from 'yup'

// STEP1
export const STEP1_SCHEMA = yup.object({
  field: yup.string().oneOf([...STUDY_FIELDS], '반드시 선택해주세요'),
  detailField: yup.string().required('반드시 선택해주세요'),
})
export type Step1Values = yup.InferType<typeof STEP1_SCHEMA>

// STEP2
export const STEP2_SCHEMA = yup.object({
  title: yup.string().min(10, '10자 이상 입력해주세요'),
  content: yup.string().min(10, '10자 이상 입력해주세요'),
  minMemberCount: yup.number().required('반드시 선택해주세요'),
})
export type Step2Values = yup.InferType<typeof STEP2_SCHEMA>

// STEP3
const levelList: LevelProps[] = ['누구나', '초급', '중급', '고급']
export const STEP3_SCHEMA = yup.object({
  level: yup.string().oneOf([...levelList], '반드시 하나를 선택해주세요'),
})
export type Step3Values = yup.InferType<typeof STEP3_SCHEMA>
