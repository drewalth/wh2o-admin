export default [{
  path: '/articles',
  redirect: 'articles-list'
}, {
  path: '/articles/list',
  name: 'articles-list',
  component: () => import(/* webpackChunkName: "users-list" */ '@/pages/articles/ArticlesPage.vue')
},
{
  path: '/articles/create',
  name: 'articles-create',
  component: () => import(/* webpackChunkName: "articles-create" */ '@/pages/articles/CreateArticlePage.vue')
},
{
  path: '/articles/edit/:id',
  name: 'articles-edit',
  component: () => import(/* webpackChunkName: "articles-edit" */ '@/pages/articles/ArticleDetail.vue')
}
]
