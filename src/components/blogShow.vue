<template>
    <!--<div v-theme="'narrow'" id="appCreateBlog">  for the directives themes!-->
  <div id="appCreateBlog">
        <h1 id="custom">New Stories</h1>
        <input type="text" v-model="search" placeholder="Search.."></input>
        <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/'+blog.id"><h2>{{blog.title|to-uppercase}}</h2></router-link>
        <article id="preview">{{blog.body | snippet}}</article>
        </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixins';
export default {
  data () {
    return {
      blogs:[],
      search:""
    }
  },
  component:{
  },
  methods:{
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
         this.blogs=data.body.slice(0,30);
      })
  },
  computed:{
            /*filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            });*///THIS IS THE PROCESS OF FILTERING SEARCHES BUT
                //TRANSFORMDED INTO MIXINS which is searchMixins.js
      },
  //Filters
  filters:{
      /*long way'to-uppercase':function(value){
           return value.toUpperCase();
      },*/
      //short-way
      toUppercase(value){
          return value.toUpperCase();
      },

     /* 'snippet':function(value){
        return value.slice(0,100)+"...";
      }*/
    //short-way
    snippet(value){
         return value.slice(0,200)+"...";
    }

  },
  directives:{
     /* 'rainbow':{
          bind(el, binding, vnode){
         //el.style.color="#"+ Math.random().toString().slice(2,8);
        el.style.color="#fff"
      }
    },*/
    'theme':{
          bind(el,binding,vnode){
            if(binding.value == 'wide'){
              el.style.maxWidth="1200px";
             }
            else if(binding.value=='narrow'){
                el.style.maxWidth="560px";
             }
             if(binding.arg=='column'){
                el.style.background='purple';
                el.style.padding='20px';
            }
            }
      }
  },
  mixins:[searchMixin]        
}
</script>
<style scoped>
#appCreateBlog *{
  font-family:'Fira Sans', sans-serif;
  box-sizing: border-box;
  text-decoration:none;
}
#appCreateBlog{
    width:100%;
    max-width: 500px;
    background:dodgerblue;
    padding: 10px 10px 5px;
    margin-top:40px;
}
label{
    display: block;
    margin:10px;
    font-weight: bold;
    color:#fff;
}
input[type="text"], textarea{
    display: block;
    width: 50%;
    padding: 8px;
    margin: 0px 0px 20px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    background:#fff;
    border-radius:5px;
}
h2{
    color:#fff;
    padding:10px;
}
hr{
    max-width:100%;
}
p{
    text-align:justify;
}
p+p+p{
    text-indent: 25px;
}
h2{
    padding:0px 10px 0px;
}
 #custom{
     width:270px;
     background:rgb(216, 6, 135);
     border-radius:5px;
 }
 li{
     color:purple;
     list-style: none;
     display:inline-block;
 }
 select{
     font-size:20px;
     padding:0px 5px 0px;
     margin-bottom:10px;
 }
 h1{
    padding:10px;
    color:#fff;
 }
</style>
