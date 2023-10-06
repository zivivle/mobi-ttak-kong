export type MatchingLoadingConstants = typeof matchingLoadingConstants
import loadingImage from '/public/image/matching-loading.gif'

export const matchingLoadingConstants = {
  image: loadingImage,
  title: '매칭이 진행중이에요',
  description: '시간이 오래 소요될 수 있어요 <br/> 매칭이 되면 알림을 보내드릴게요! ',
  nodataDescription: '매칭을 기다리고 있어요',
}
