<template>
  <div class='page-index'>
    <div class='banner-wrapper'>
      <div class='banner w1200 center'>首页 banner</div>
    </div>
    <div class='job-info'>
      <div class='marquee w1200 center'>活动资讯跑马灯</div>
    </div>
    <div class='w1200 center'>
      <PageContent>
        <template #left>
          <HomeTabs />
        </template>
        <template #right>
          这里是首页右边内容
        </template>
      </PageContent>
    </div>
  </div>
</template>

<script>
import PageContent from '~/components/PageContent'
import HomeTabs from '~/components/HomeTabs'
import { PAGE_METAS } from '~/constants'
export default {
  name: 'IndexPage',
  components: {
    PageContent,
    HomeTabs
  },
  layout: 'BasicLayout',
  data() {
    return {
      pageName: 'IndexPage',
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

<style lang='less' scoped>
.page-index{
  font-size: 12px;
  .banner-wrapper{
    background: darkred;
    .banner{
      height: 350px;
    }
  }
  .job-info{
    background-color: #fff;
    .marquee{
      height: 50px;
    }
  }
}
</style>
