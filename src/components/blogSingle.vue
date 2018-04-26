<template>
    <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <hr/>
    <article>{{blog.body}}</article>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created(){
            this.$http.get('http://jsonplaceholder.typicode.com/posts/'+ this.id).then(function(data){
                console.log(data);
                this.blog=data.body;
            });
        }
    }
</script>

<style scoped>
    #single-blog{
        color:#222;
        font-family:'Fira Sans', sans-serif;
        max-width:960px;
        margin:0;
        background:dodgerblue;
        padding:10px;
        margin-top:40px;
    }
    article{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    background:#fff;
    text-align:justify;
    }
    h1{
        color:#fff;
    }
</style>