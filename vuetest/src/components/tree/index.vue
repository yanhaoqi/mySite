<template>
  <section>
    <li>
      <span v-text="data.title"></span>
      <ul v-if="data.children && data.children.length > 0">
        <!--在自身组件中调用自身 通过动态属性把数据传递给被调用的自身-->
        <treeList v-for="(item, index) in data.children" :data="item" :key="index"></treeList>
      </ul>
    </li>
  </section>
</template>
<script>
  export default{
    name: 'treeList',
    props: {
      data: {
        type: Object,
        require: true
      }
    },
    data () {
      return {

      }
    }
  }
</script>
<style lang="less" scoped>
  ul{
    list-style: none;
    margin: 10px;
  }
</style>
