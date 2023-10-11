import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useCreatedStudies = () => {
  return useQuery({
    queryKey: ['createdStudies'],
    queryFn: async () => {
      const { data } = await axios.get<StudyDataType[]>('/api/getUserCreatedStudies')
      return data
    },
  })
}
