import { UserDataType } from '.'

export interface StudyDataType {
  content: string
  detailField: string
  field: string
  isAppliedMember: UserDataType[]
  isClosed: boolean
  isInPerson: boolean
  isMember: UserDataType[]
  level: string
  location: string
  minMemberCount: number
  nowMemberCount: number
  title: string
  id: number
  _id: string
}
