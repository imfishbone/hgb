<template>
  <div class='page-footer'>
    <div class='footer-wraper'>
      <div class='footer-info w1200 center'>这里是底部内容</div>
    </div>
    <div class='copy-rights-wraper'>
      <div class='copy-right w1200 center'>
        网站版权信息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  components: {
  }
}
</script>

<style scoped lang='less'>
  .page-footer {
    color: rgba(124,124,124,1);
    .footer-wraper {
      background-color: rgba(37,37,37, 1);;
      .footer-info {
        height: 320px;
      }
    }
    .copy-rights-wraper{
      background-color: rgba(32,32,32, 1);;
      .copy-right{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        // .verticalCenter('center');
      }
    }
  }
</style>
