import SiteLayout from '@/layouts/SiteLayout.vue'

export default [
  {
    path: '/',
    component: SiteLayout,
    children: [
      {
        path: '/',
        name: 'home',
        // component: () => import('../views/HomeView.vue')
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/apartments/:slug',
        name: 'apartment',
        component: () => import('../views/ApartmentView.vue'),
        props: true // Pass route params as props
      }
    ]
  }
]
