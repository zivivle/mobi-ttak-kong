export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: '딱콩',
  description: '딱 맞는 스터디만을 매칭해주는 딱콩!',
  mainNav: [
    {
      title: '홈',
      href: '/',
    },
    {
      title: '내스터디',
      href: '/',
    },
    {
      title: '매칭 현황',
      href: '/',
    },
    {
      title: '스터디 만들기',
      href: '/',
    },
  ],
  subNav: {
    title: 'Login',
    href: '/login',
  },
}
