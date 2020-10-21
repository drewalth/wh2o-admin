export default [{
  path: '/reaches',
  redirect: 'reaches-list'
}, {
  path: '/reaches/list',
  name: 'reaches-list',
  component: () => import(/* webpackChunkName: "reaches-list" */ '@/pages/reaches/ReachesPage.vue')
},
{
  path: '/reach-detail/:id',
  name: 'reach-detail',
  component: () => import(/* webpackChunkName: "reach-detail" */ '@/pages/reaches/reach-detail/ReachDetail.vue')
}
]
