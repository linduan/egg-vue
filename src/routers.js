
export default [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/components/Home'),
    meta: {
      nav: {
        title: '记账本',
        pre: 'wap-nav',
        next: 'plus',
        preRouter: 'Setting',
        nextRouter: 'Add'
      }
    }
  },
  {
    path: '/Add',
    name: 'Add',
    component: ()=>import('@/components/Add'),
    meta: {
      nav: {
        title: '记一笔',
        pre: 'arrow-left',
        next: 'arrow',
        preRouter: '',
        nextRouter: ''
      }
    }
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: ()=>import('@/components/Setting'),
    meta: {
      nav: {
        title: '设置',
        pre: 'arrow-left',
        next: 'arrow',
        preRouter: '',
        nextRouter: ''
      }
    }
  },
  {
    path: '/404',
    name: 'MissingPage',
    component: ()=>import('@/components/404'),
    meta: {
      nav: {
        title: 'MissingPage',
        pre: 'arrow-left',
        next: 'arrow'
      }
    }
  },
  { path: '*', redirect: '/' }
]