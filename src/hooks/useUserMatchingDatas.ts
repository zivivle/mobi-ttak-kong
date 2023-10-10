import { UserDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useUserMatchingDatas = () => {
  return useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const { data } = await axios.get('/api/getUserMatchingData')
      return data as UserDataType[]
    },
  })
}
