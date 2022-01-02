<template>
  <div>
    <Breadcrumb separator="">
      <BreadcrumbItem>当前位置</BreadcrumbItem>
      <BreadcrumbSeparator>:</BreadcrumbSeparator>
      <BreadcrumbItem href='/home'>首页</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href='/home'>首页</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
import { Breadcrumb } from 'ant-design-vue'
const BreadcrumbItem  = Breadcrumb.Item
const BreadcrumbSeparator  = Breadcrumb.Separator
export default {
  name: 'PageNavigation',
  components: {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbSeparator
  }
}
</script>
