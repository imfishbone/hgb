<!--各种详情页基础布局-->
<template>
  <div class='detail-layout'>
    <PageHeader />
    <div class='banner'>这里是详情页广告位</div>
    <div class='nav w1200 center'>
      <PageNavigation />
    </div>
    <div class='detail-content'>
      <PageContent>
        <template #left>
          <nuxt></nuxt>
        </template>
        <template #right>
          这里是右边广告位内容区域
        </template>
      </PageContent>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import PageFooter from '~/components/PageFooter'
import PageContent from '~/components/PageContent'
import PageNavigation from '~/components/PageNavigation'
export default {
  name: 'DetailLayout',
  components: {
    PageHeader,
    PageFooter,
    PageContent,
    PageNavigation
  }
}
</script>

<style scoped lang='less'>
.detail-layout{
  .banner{
    height: 400px;
    background-color: darkred;
  }
  .nav{
    padding: 10px 0;
  }
  .detail-content{
    display: flex;
  }
}
</style>
