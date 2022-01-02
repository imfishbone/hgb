<!--页面正体内容左右结构组件-->
<template>
  <div class='page-content-layout w1200 center'>
    <div class='left'>
      <slot name='left'></slot>
    </div>
    <div class='right'>
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.page-content-layout{
  display: flex;
  justify-content: space-around;
  .left{
    flex: 1;
    min-height: 500px;
    //background: #5c5c5c;
  }
  // 右边距离 320px 可根据实际效果图进行调整
  .right{
    width: 320px;
    margin-left: 10px;
  }
}
</style>

