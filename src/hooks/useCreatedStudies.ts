import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { StudyDataType } from '@/types'

export const useCreatedStudies = () => {
  return useQuery({
    queryKey: ['createdStudies'],
    queryFn: async () => {
      const { data } = await axios.get('/api/getUserCreatedStudies')
      return data as StudyDataType[]
    },
  })
}
