<template>
  <div id="appCreateBlog">
    <h1 id="custom">Share Something</h1>
    <hr/>
    <form v-if="!submitted">
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" require/>
        <label>Blog Content:</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <h2>Tags</h2>
            <label>Mature</label>
            <input type="checkbox" value="Mature" v-model="blog.categories"/>
            <label>Travel</label>
            <input type="checkbox" value="Travel" v-model="blog.categories"/>
            <label>Anime</label>
            <input type="checkbox" value="Anime" v-model="blog.categories"/>
            <label>Food</label>
            <input type="checkbox" value="Food" v-model="blog.categories"/>
            <label>Movie</label>
            <input type="checkbox" value="Movie" v-model="blog.categories"/>
            <label>Adventure</label>
            <input type="checkbox" value="Adventure" v-model="blog.categories"/>
            <label>Peak</label>
            <input type="checkbox" value="Peak" v-model="blog.categories"/>
            <label>Vacation</label>
            <input type="checkbox" value="Vacation" v-model="blog.categories"/>
            <label>Inventions</label>
            <input type="checkbox" value="Inventions" v-model="blog.categories"/>
        </div>
        <h2>Author</h2>
        <select v-model="blog.author">
            <option v-for="author in authors">{{author}}</option>
        </select>
        </br>
        <button v-on:click.prevent="post">Post</button>
    </form>
    <div v-if="submitted">
        <h2 id="custom3">Submitted</h2>
    </div>
    <div id="preview">
        <h3>Preview</h3>
        <hr/>
        <p>Blog title: {{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
            <li v-for="category in blog.categories"><a href="includes">#{{category}}</a>|</li>
        </ul>
        <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blog:{
            title:"",
            content:"",
            categories:[],
            author:"",
        },
        authors:['Clone 0','Clone 1','Clone 3', ],
        submitted:false
    }
  },
  component:{
  },
  methods:{
      post:function(){
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
              title: this.blog.title,
              body:this.blog.content,
              userId: 1
          }).then(function(data){
              console.log(data);
              this.submitted=true;
          });
      }
  },
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
    }
}
</script>

<style scoped>
#appCreateBlog *{
  font-family:'Fira Sans', sans-serif;
  text-decoration:none;
  box-sizing: border-box;
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
    width: 100%;
    padding: 8px;
    margin: 0px 0px 20px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    background:#fff;
    border-radius:5px;
}
h3{
    margin-top: 10px;
}
h2, h1{
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
#checkboxes{
    display:inline-block;
    margin-right:10px;
}
#checkboxes label{
    display:inline-block;
}
#checkboxes h2,{
    padding:0px 10px 0px;
}
 #custom{
     width:300px;
     background:rgb(216, 6, 135);
     border-radius:5px;
 }
 li{
     color:purple;
     list-style: none;
     display:inline-block;
 }
 a{
     color:purple;
     font-style: italic;
 }
 select{
     font-size:20px;
     padding:0px 5px 0px;
     margin-bottom:10px;
 }
 #custom3{
     color:#fff;
 }
 button{
        border: none;
        text-decoration:none;
        border-radius:10px;
        cursor: pointer;
        padding: 15px 32px;
        margin: 4px 2px;
 }
</style>
