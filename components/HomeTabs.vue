<template>
  <div class='home-tabs'>
    <Tabs :default-active-key="getActiveTab" :animated='false' @change="handleTabChange">
      <TabPane
        v-for='item in getTabs'
        :key="item.id"
        :tab="item.name"
      >
        <div v-if='item.records.length'>
<!--          <div v-if='getActiveTab === "queryHgWorkList"'>-->
<!--            <HomeTabFindJob :list='item.records' />-->
<!--          </div>-->
<!--          <div v-if='getActiveTab === "queryHgByCityList"'>-->
<!--            <HomeTabFindTalents :list='item.records' />-->
<!--          </div>-->
          <component :is='allTabs[getActiveTab]' :list='item.records'></component>
        </div>
        <div v-else class='no-data'>暂无数据</div>
      </TabPane>
    </Tabs>
    <div :class="['load-more', pageInfo.isMore ? 'no-more' : '']" @click='handleLoadMore'>查看更多好工作({{pageInfo.paging}})</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { Tabs, message } from 'ant-design-vue'
import apiUrl from '~/api/request'
import  { HOME_TAB_PAGE_SIZE } from '~/constants'
import HomeTabFindJob from '~/components/HomeTabFindJob'
import HomeTabFindTalents from '~/components/HomeTabFindTalents'
const TabPane = Tabs.TabPane
export default {
  name: 'HomeTabs',
  components: {
    Tabs,
    TabPane,
    // HomeTabFindJob,
    // HomeTabFindTalents,
  },
  data() {
    return {
      allTabs: {
        'queryHgWorkList': HomeTabFindJob,
        'queryHgByCityList': HomeTabFindTalents,
      }
    }
  },
  computed: {
    ...mapGetters({
      getTab: 'homeTabs/getTab',
      getTabs: 'homeTabs/getTabs',
      getActiveTab: 'homeTabs/getActiveTab'
    }),
    pageInfo() {
      const { current, pages } = this.getTab
      // console.log(current === pages)
      return {
        paging: `${current}/${pages}`,
        isMore: parseInt(current) === parseInt(pages)
      }
    }
  },
  methods: {
    ...mapMutations({
      setActiveTab: 'homeTabs/setActiveTab',
      setTabAttr: 'homeTabs/setTabAttr',
      initTab: 'homeTabs/initTab'
    }),
    ...mapActions({
      loadMore: 'homeTabs/loaderMore'
    }),
    async initTabData() {
      const currentActiveTab = this.getActiveTab
      const key = `${currentActiveTab}Url`
      const url = `${apiUrl[key]}?current=1&size=${HOME_TAB_PAGE_SIZE}`
      try {
        const res = await this.$axios.get(url)
        // console.log(res, '---initTabData---')
        const { current, total, pages, size, records } = res.data
        this.initTab({tab: this.getActiveTab, current, total, pages, size, records })
      } catch (e) {
        message.info('接口异常，请稍后再试！')
      }
    },
    handleTabChange(tab) {
      this.setActiveTab(tab);
      const { records } = this.getTab
      // 选项卡的数据为空则需要初始化数据
      if (!records.length) {
        this.initTabData()
      }
    },
    async handleLoadMore() {
      if (this.pageInfo.isMore) {
        // 没有更多数据了！
        return false
      }
      const result = await this.loadMore(this.$axios)
      if (!Number.isInteger(result)) {
        message.error('亲，接口报错了！请稍后再试！');
      }
      // console.log(result, '----loadmore reuslt----')
    },
  }
}
</script>

<style lang='less'>
.home-tabs{
  padding-bottom: 20px;
  div[role="tablist"] {
    border-bottom: none;
  }
  .ant-tabs-nav .ant-tabs-tab-active{
    color: rgba(238, 51, 59, 1);
  }
  div[role="tab"]:hover{
    color: rgba(238, 51, 59, 1);
  }
  .ant-tabs-ink-bar{
    background-color: rgba(238, 51, 59, 1);
  }
  .load-more{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin: 10px 0 20px;
    border-radius: 2px;
    color: rgba(253, 75, 80, 1);
    background-color: #fff;
  }
  .no-more{
    color: #ccc;
  }
  .no-data{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 180px;
    text-align: center;
    background-color: #fff;
  }
}

</style>
