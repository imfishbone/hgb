<!--根据不同的tab 渲染不同的内容布局及字段-->
<template>
  <div>
    <div
      v-for='item in list'
      :key='item.sysid'
      class='home-tab-job'
      @click='goDetail(item.sysid)'
    >
      <div class='header'>
        <span>{{item.title}}</span>
        <span>{{item.createdate}}</span>
      </div>
      <div class='tags'>
        <span>{{item.workname}}</span>
        <span>{{item.addresscity}}</span>
      </div>
      <div class='desc' v-html='item.zgdesc'></div>
      <div class='bottom'>
        <div>
          <Avatar :src='item.headphoto' :size='30' />
          <span>{{item.nickname}}</span>
          <span>认证用户</span>
        </div>
        <span>急速联系</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from 'ant-design-vue'
export default {
  name: 'HomeTabItem',
  components: {
    Avatar
  },
  props: {
    list: {
      type: Array,
      required: true
    },
  },
  methods: {
    goDetail(id) {
      this.$router.push({path: `/jobDetail/${id}`})
    }
  }
}
</script>

<style scoped lang='less'>
  .home-tab-job{
    cursor: pointer;
    border-radius: 2px;
    margin-bottom: 10px;
    padding: 12px 10px;
    background-color: #fff;
    .header{
      display: flex;
      justify-content: space-between;
    }
    .tags{
      >span{
        display: inline-block;
        margin-left: 5px;
        padding: 4px;
        background-color: #ccc;
      }
    }
    .bottom{
      display: flex;
      justify-content: space-between;
    }
  }
</style>
