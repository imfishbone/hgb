<template>
  <div>
    <div
      v-for='item in list'
      :key='item.sysid'
      class='home-tab-talents'
      @click='goDetail(item.sysid)'
    >
      <div class='header'>
        <div class='avatar'>
          <Avatar :src='item.headphoto' :size='60' />
        </div>
        <div class='personal'>
          <div><span class='name'>{{item.nickname}}</span> <span>{{item.usersex | formatGender}}</span></div>
          <div>{{item.phone}}</div>
        </div>
        <div class='make-call'>
          拨打电话
        </div>
      </div>
      <div class='desc'>
        <div>
          <div>状态：{{item.eauditstatus || '暂无'}} 年龄：{{item.age}}</div>
          <div>期望工作地：{{item.usercity || '暂无'}} 专业技能：{{item.works}}</div>
        </div>
      </div>
      <div class='bottom'>
        <div v-html='item.hgdesc'></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from 'ant-design-vue'
export default {
  name: 'HomeTabFindTalents',
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
      this.$router.push({path: `/talentsDetail/${id}`})
    }
  }
}
</script>

<style scoped lang='less'>
.home-tab-talents{
  cursor: pointer;
  border-radius: 2px;
  margin-bottom: 10px;
  padding: 12px 10px;
  background-color: #fff;
  .header{
    display: flex;
    .make-call{
      display: flex;
      flex: 1;
      justify-content: right;
    }
  }
}
</style>
