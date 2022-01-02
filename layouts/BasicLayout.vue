<template>
  <div class='basic-layout'>
    <PageHeader />
    <nuxt></nuxt>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader';
import PageFooter from '~/components/PageFooter';
export default {
  name: 'BasicLayout',
  components: {
    PageHeader,
    PageFooter,
  }
}
</script>
