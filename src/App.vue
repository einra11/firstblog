<template>
  <div class="globe">
    <app-header class="head"></app-header>
    <div class="mapping">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import blogCreate from './components/blogCreate.vue';
  import blogShows from './components/blogShow.vue';
  import blogList from './components/blogList.vue';
  import header from './components/header.vue';
export default {
  data () {
    return {
    }
  },
  components:{
    'app-header':header,
  },
  /*//Lifecycle HOOKS
    beforeCreate(){
        alert('beforeCreate');
    },
    created(){
        alert('created');
    },
    beforeMount(){
        alert('beforeMounted');
    },
    mounted(){
        alert('mounted');
    },
    beforeUpdate(){
        alert('beforeUpdate');
    },
    updated(){
        alert('updated');
    }*/
}
</script>

<style>
  body{
    margin:0;
    background:yellow;
  }
  .mapping{
      display:flex;
      justify-content:center;
  }
  .globe{
    display:flex;
    justify-content:center;
    flex-flow:column;
  }
  .globe-.mapping{
    flex:1;
  }
</style>
