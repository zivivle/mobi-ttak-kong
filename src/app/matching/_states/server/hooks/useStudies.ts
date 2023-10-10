import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useStudies = () => {
  return useQuery({
    queryKey: ['studies'],
    queryFn: async () => {
      const { data } = await axios.get('/api/getStudies')
      return data as StudyDataType[]
    },
  })
}
