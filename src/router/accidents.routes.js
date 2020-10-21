export default [{
  path: '/accidents',
  redirect: 'accidents-list'
}, {
  path: '/accidents/list',
  name: 'accidents-list',
  component: () => import(/* webpackChunkName: "accidents-list" */ '@/pages/accidents/AccidentsPage.vue')
},
{
  path: '/accident-detail/:id',
  name: 'accident-detail',
  component: () => import(/* webpackChunkName: "accident-detail" */ '@/pages/accidents/accident-detail/AccidentDetail.vue')
}
]
