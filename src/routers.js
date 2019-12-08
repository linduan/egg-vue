
export default [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/components/Home'),
    meta: {
      nav: {
        title: '记账本',
        preIcon: 'wap-nav',
        nextIcon: 'plus',
        pre: 'Setting',
        next: 'Add'
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
        preIcon: 'arrow-left',
        nextIcon: '',
        pre: 'Home'
      }
    }
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: ()=>import('@/components/Setting'),
    meta: {
      nav: {
        title: '分类列表',
        preIcon: 'arrow-left',
        nextIcon: 'plus',
        pre: 'Home',
        next: 'SettingAdd'
      }
    }
  },
  {
    path: '/SettingAdd',
    name: 'SettingAdd',
    component: ()=>import('@/components/SettingAdd'),
    meta: {
      nav: {
        title: '添加分类',
        preIcon: 'arrow-left',
        nextIcon: '',
        pre: 'Setting'
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
        preIcon: 'arrow-left',
        nextIcon: 'arrow'
      }
    }
  },
  { path: '*', redirect: '/' }
]