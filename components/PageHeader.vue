<template>
  <div class='page-header'>
    <div class='header-wraper w1200 center'>
      <div class='logo'>活动宝，找活，招工</div>
      <div class='menu'>
        <ul class='menu-list'>
          <li v-for='item in getMenus' :key='item.id' :class="currentMenu === item.id ? 'on' : ''" @click='setCurrentMenu(item.id)'>
            <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
          </li>
        </ul>
        <Button type="danger" shape="round" style='font-size: 12px'>发布需求</Button>
      </div>
    </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { Button } from 'ant-design-vue'
export default {
  name: 'PageHeader',
  components: {
    Button
  },
  data() {
    return {
      list: this.$store.state.menus,
    }
  },
  computed: {
    currentMenu() {
      return this.$store.state.menu.currentMenu;
    },
    ...mapGetters({
      getMenus: 'menu/getMenus',
    })
  },
  mounted() {
    this.setMenu(this.$route.name);
  },
  methods: {
    setCurrentMenu(id) {
      this.setMenu(id);
    },
    ...mapMutations({
      setMenu: 'menu/setMenu',
    })
  }
}
</script>

<style scoped lang='less'>
.page-header {
  height: 98px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .header-wraper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 170px;
      height: 62px;
      text-indent: -12000px;
      background-image: url("../assets/img/logo.png");
      background-size: 100% 100%;
    }
    .menu{
      display: flex;
      justify-content: center;
      align-items: center;
      .menu-list{
        display: flex;
        font-size: 13px;
        >li{
          margin-right: 40px;
          > a{
            color: #5c5c5c;
          }
        }
        .on{
          > a{
            color: rgba(238, 51, 59, 1);
          }
        }
      }
    }
  }
}
</style>
