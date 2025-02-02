import SiteLayout from '@/layouts/SiteLayout.vue'

export default [
  {
    path: '/',
    component: SiteLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      }
    ]
  }
]
