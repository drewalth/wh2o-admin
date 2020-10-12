export default [{
  path: '/reaches',
  redirect: 'reaches-list'
}, {
  path: '/reaches/list',
  name: 'reaches-list',
  component: () => import(/* webpackChunkName: "users-list" */ '@/pages/users/UsersPage.vue')
}
  // {
  // path: '/users/edit',
  // name: 'users-edit',
  // component: () => import(/* webpackChunkName: "users-edit" */ '@/pages/users/EditUserPage.vue')
  // }
]
