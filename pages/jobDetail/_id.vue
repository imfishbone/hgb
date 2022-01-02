<template>
  <div class='job-detail'>
    <div class='title'>
     <div class='left'>
       <h2>{{title}}</h2>
       <div>发布时间: {{createdate}} 浏览次数：{{viewnum}} 收藏：{{collectnum}}</div>
       <div>职位/工种：{{workname}} 需求地点：{{addresscity}}</div>
     </div>
      <div class='right'>
        <Avatar :src='headphoto' :size='55' />
        <div class='personal'>
          <div>{{nickname}}</div>
          <div>{{phone}}</div>
        </div>
      </div>
    </div>
    <div class='desc'>
      <div v-html='zgdesc'></div>
    </div>
    <div class='good-job'>
      <div>附近优秀的工作</div>
      <div>附近优秀的工作列表区域</div>
    </div>
  </div>
</template>

<script>
import { Avatar, message } from 'ant-design-vue'
import { queryHgWorkDetail } from '~/api/request'
import { PAGE_METAS } from '~/constants'
export default {
  name: 'JobDetail',
  components: {
    Avatar
  },
  layout: 'DetailLayout',
  async asyncData({app, params}) {
    const res = await queryHgWorkDetail(app.$axios, { sysid: params.id })
    if (res.data) {
      const {
        title,
        phone,
        headphoto,
        nickname,
        createdate,
        viewnum,
        collectnum,
        workname,
        addresscity,
        zgdesc,
      } = res.data
      return {
        title,
        phone,
        headphoto,
        nickname,
        createdate,
        viewnum,
        collectnum,
        workname,
        addresscity,
        zgdesc,
      }
    } else {
      res.msg && message.info(res.msg)
    }
  },
  data() {
    return {
      pageName: 'JobDetail',
    }
  },
  head() {
    return {
      title: this.title,
      meta: PAGE_METAS[this.pageName].meta
    }
  },
}
</script>

<style scoped lang='less'>
  .bg-white{
    background-color: #fff;
  }
  .space{
    padding: 12px 14px;
  }
  .job-detail{
    //padding: 10px;
    min-height: 500px;
    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 105px;
      .bg-white();
      .space();
      .left{
        flex: 1;
      }
      .right{
        width: 220px;
        display: flex;
        .personal{
          padding-left: 10px;
        }
      }
    }
    .desc{
      min-height: 230px;
      margin-top: 10px;
      .bg-white();
      .space();
    }
    .good-job{
      margin-top: 20px;
      padding: 10px;
      background-color: #fff;
    }
  }
</style>
