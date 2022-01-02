<template>
  <div class='talent-detail'>
    <div>{{nickname}}</div>
    <div>{{phone}}</div>
    <div>{{updatedate}}</div>
  </div>
</template>

<script>
// 人才页面没有效果图 我不知道里面内容是什么排版的就直接将结果打印到页面了
import { message } from 'ant-design-vue'
import { queryHgZhDetail } from '~/api/request'
import { PAGE_METAS } from '~/constants'
export default {
  name: 'TalentsDetail',
  layout: 'DetailLayout',
  async asyncData({app, params}) {
    // console.log(params.id, '--params.id--')
    const res = await queryHgZhDetail(app.$axios, { sysid: params.id })
    if (res.data) {
      return res.data
    } else {
      res.msg && message.info(res.msg)
    }
  },
  data() {
    return {
      pageName: 'TalentsDetail',
    }
  },
  head() {
    return {
      title: PAGE_METAS[this.pageName].title,
      meta: PAGE_METAS[this.pageName].meta
    }
  },
}
</script>

<style scoped lang='less'>
  .talent-detail{
    color: red;
  }
</style>
