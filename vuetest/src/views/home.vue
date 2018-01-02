<template>
  <section>
    <h1>这是vuetest的主页</h1>
    <div class="tree">
      <ul v-for="item in cascader">
        <tree :data="item"></tree>
      </ul>
    </div>
  </section>
</template>
<script>
  import tree from '../components/tree'
  export default{
    components: {
      tree
    },
    data () {
      return {
        cascader: [
          {
            title: 'A',
            children: [
              {
                title: 'A -[ 1 ]',
                children: [
                  {
                    title: 'A -[ 1 ]- 1'
                  },
                  {
                    title: 'A -[ 1 ]- 2'
                  }
                ]
              },
              {
                title: 'A -[ 2 ]',
                children: [
                  {
                    title: 'A -[ 2 ]- 1'
                  }
                ]
              }
            ]
          },
          {
            title: 'B',
            children: [
              {
                title: 'B -[ 1 ]',
                children: [
                  {
                    title: 'B -[ 1 ]- 1'
                  },
                  {
                    title: 'B -[ 1 ]- 2'
                  }
                ]
              },
              {
                title: 'B -[ 2 ]',
                children: [
                  {
                    title: 'B -[ 2 ]- 1'
                  },
                  {
                    title: 'B -[ 2 ]- 2'
                  }
                ]
              }
            ]
          },
          {
            title: 'C',
            children: [
              {
                title: 'C -[ 1 ]'
              },
              {
                title: 'C -[ 2 ]'
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  section{
    h1{
      margin: 30px auto;
    }
    .tree{

    }
  }
</style>
