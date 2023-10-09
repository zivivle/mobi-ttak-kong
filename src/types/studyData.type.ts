import { UserStudyDataType } from '.'

export interface StudyDataType {
  content: string
  detailField: string
  field: string
  isAppliedMember: UserStudyDataType[]
  isClosed: boolean
  isInPerson: boolean
  isMember: UserStudyDataType[]
  level: string
  location: string
  minMemberCount: number
  nowMemberCount: number
  title: string
  _id: string
  id?: number
}
