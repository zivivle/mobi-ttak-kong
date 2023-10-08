import { StudyDataType } from '@/types'
export interface UserDataType {
  email: string
  field: string
  isAppliedStudy: StudyDataType[]
  isCreatedStudy: StudyDataType[]
  isMatchingStudy: StudyDataType[]
  myMatchingData: []
  name: string
  _id: string
}
