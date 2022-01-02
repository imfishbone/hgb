import requestUrls from '~/api/request'
import { HOME_TABS } from '~/constants'

export const state = () => {
  // 初始化 state 数据, 根据从 constants 中导出的 HOME_TABS 进行动态设置保证唯一的数据源
  // 扩展首页 tab 比如要增加一个选项卡，那么只需要在 constants -> HOME_TABS 下添加即可
  const res = {
    activeTab: HOME_TABS[0].id,
    tabs: {},
  }
  for (const item of HOME_TABS) {
    const copyItem = Object.assign({}, item)
    copyItem.apiUrl = requestUrls[`${copyItem.id}Url`];
    res.tabs[copyItem.id] = copyItem
  }
  return res
  // {
  //   activeTab: HOME_TABS[0].id,
  //   tabs: {
  //     queryHgWorkList: {
  //       id: 'queryHgWorkList',
  //       name: '找工作',
  //       apiUrl: queryHgWorkListUrl,
  //       current: 0,
  //       total: 0,
  //       pages: 0,
  //       size: 0,
  //       records: [],
  //     },
  //     queryHgByCityList: {
  //       id: 'queryHgByCityList',
  //       name: '找人才',
  //       apiUrl: queryHgByCityListUrl,
  //       current: 0,
  //       total: 0,
  //       pages: 0,
  //       size: 0,
  //       records: [],
  //     },
  //   }
  // }
}

export const getters = {
  getTab(state) {
    return state.tabs[state.activeTab]
  },
  getTabs(state) {
    return state.tabs
  },
  getActiveTab(state) {
    return state.activeTab
  }
}

export const mutations = {
  setActiveTab(state, tab) {
    state.activeTab = tab
  },
  initTab(state, {tab, current, total, pages, size, records}) {
    state.tabs[tab] = Object.assign(state.tabs[tab], {current, total, pages, size, records})
  },
  add(state, {tab, list}) {
    state.tabs[tab].records = state.tabs[tab].records.concat(list)
  },
  setTabAttr(state, {tab, attr, val}) {
    state.tabs[tab][attr] = val
  },
}

export const actions = {
  async loaderMore({ dispatch, commit, getters }, axios) {
    const currentTab = getters.getTab
    const {apiUrl, current, pages, size} = currentTab
    const currentNext = parseInt(current) + 1
    // console.log(currentNext, '----currentNext----');
    if (currentNext > pages) {
      // 没有更多数据了
      return Promise.resolve(0)
    } else {
      try {
        // 更新当前 tab current 值
        commit('setTabAttr', {tab: getters.getActiveTab, attr: 'current', val: currentNext})
        const res = await axios.get(`${apiUrl}?current=${currentNext}&size=${size}`)
        const { records } = res.data
        commit('add', {tab: getters.getActiveTab, list: records})
        return Promise.resolve(records.length)
      } catch (e) {
        return Promise.resolve('error')
      }
    }
  }
}
