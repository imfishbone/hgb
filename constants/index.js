// 全局静态变量可以定义在这里

// 首页 TAB 选项卡 pagesize
import { queryHgByCityListUrl, queryHgWorkListUrl } from '~/api/request'

export const HOME_TAB_PAGE_SIZE = 1

/*
* 页面 meta 信息
* */
export const PAGE_METAS = {
  // 首页
  IndexPage: {
    title: '活工宝首页',
    meta: [
      {
        hid: 'keywords',
        name: 'keywords',
        content: '活工宝，找工作，找人'
      },
      {
        hid: 'description',
        name: 'description',
        content: '活工宝描述信息'
      }
    ]
  },
  // 找工作详情页面
  JobDetail: {
    title: '活工宝找工作详情页面',
    meta: [
      {
        hid: 'keywords',
        name: 'keywords',
        content: '找工作'
      },
      {
        hid: 'description',
        name: 'description',
        content: '找工作描述信息'
      }
    ]
  },
  // 人才详情页面
  TalentsDetail: {
    title: '人才详情页面',
    meta: [
      {
        hid: 'keywords',
        name: 'keywords',
        content: '人才，人才，人才'
      },
      {
        hid: 'description',
        name: 'description',
        content: '人才描述'
      }
    ]
  },
}

/*
* 首页 TAB 选项卡
* queryHgWorkList, queryHgByCityList 等都对应接口中的值如：
* /hgb/hapi/hg/queryHgWorkList?current=3
*
* */
export const HOME_TABS = [
  {
    id: 'queryHgWorkList',
    name: '找工作',
    apiUrl: queryHgWorkListUrl,
    current: 0,
    total: 0,
    pages: 0,
    size: 0,
    records: [],
  },
  {
    id: 'queryHgByCityList',
    name: '找人才',
    apiUrl: queryHgByCityListUrl,
    current: 0,
    total: 0,
    pages: 0,
    size: 0,
    records: [],
  }
];
