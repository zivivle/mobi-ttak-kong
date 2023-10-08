import { StudyDataType } from '@/types'
export interface UserStudyDataType {
  email: string
  field: string
  isAppliedStudy: StudyDataType[]
  isCreatedStudy: StudyDataType[]
  isMatchingStudy: StudyDataType[]
  myMatchingData: StudyDataType[]
  name: string
  _id: string
}
