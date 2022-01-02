export const state = () => ({
  currentMenu: '',
  menus: [
    {
      id: 'index',
      name: '首页',
      path: '/',
    },
    {
      id: 'findJob',
      name: '找工作',
      path: '/findJob',
    },
    {
      id: 'jobTopic',
      name: '活工圈',
      path: '/jobTopic',
    },
    {
      id: 'jobInfo',
      name: '活工资讯',
      path: '/jobInfo'
    }
  ]
});

export const getters = {
  getMenus(state) {
    return state.menus
  }
}

export const mutations = {
  setMenu(state, menuName){
    state.currentMenu = menuName;
  }
}
