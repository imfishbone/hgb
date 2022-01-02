// 首页需要服务端渲染的初始化数据可以在这配置
// 目前只做了tab 选项卡的第一个数据初始化，可以扩展其它模块需要初始化的数据
import { queryHgWorkListUrl } from '~/api/request'
import { HOME_TAB_PAGE_SIZE } from '~/constants'
// export const state = () => ({
//   InitHomeFirstTab: null,
// });
// export const mutations = {
//   setInitHomeFirstTab(state, val) {
//     state.InitHomeFirstTab = val
//   }
// }
export const actions = {
  async nuxtServerInit({commit}, {app}) {
    const { data } = await app.$axios.get(`${queryHgWorkListUrl}?current=1&size=${HOME_TAB_PAGE_SIZE}`)
    // await commit('setInitHomeFirstTab', data)
    const {current, total, pages, size, records} = data;
    commit('homeTabs/initTab', {tab: 'queryHgWorkList', current, total, pages, size, records})
    // 继续扩展其他模块，也可以单独分文件 import 来组织代码会更为合理
  }
}
