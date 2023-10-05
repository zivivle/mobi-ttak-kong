export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: '딱콩',
  description: '딱 맞는 스터디만을 매칭해주는 딱콩!',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Login',
      href: '/login',
    },
  ],
  subNav: {
    title: 'Login',
    href: '/login',
  },
}
