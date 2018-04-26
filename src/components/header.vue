<template>
<div class="wrapper">
    <nav>
        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/add" exact>Share</router-link></li>
            <li><router-link to="/titles" exact>Lists</router-link></li>   
        </ul>
        <ul class="social">
            <li><a href="https://www.facebook.com" class="fb">Facebook</a></li>
            <li><a href="https://www.twitter.com" class="tw">Twitter</a></li>
        </ul>
    </nav>
</div> 
</template>

<script>
    export default{

    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
.wrapper{
    width:100%;
    max-width: 2000px;
    margin:0px 0px 40px;
}
/*Menu Base*/
nav{
     font-family:'Fira Sans', sans-serif;
    background:#333;
   }
nav ul{
        list-style-type:none;
        padding:0;
        font-size:20px;
        font-weight:400px;
        margin:0;
    }
nav a{
        color:#fff;
        text-decoration:none;
        text-align:center;
        padding:20px;
        display:block;
        border-radius:0;
        margin-top:5px;
        margin-left:5px;
    }
nav a:hover{
    background-color:#555;
}
.router-link-active{
        background:yellow;
        color:#444;
}
a.tw{
    background: url(../assets/tw.png) no-repeat center;
    border-radius:10px 10px 10px 10px;
    background-size:90%;
}
a.fb{
    background: url(../assets/fb.png) no-repeat center;
    border-radius:10px 10px 10px 10px;
    background-size:70%;
}

.social a{
    text-indent: -10000px;
}

.social{
    max-width: 80px;
    margin:0 auto;
}

nav ul.social{
    flex: 1 1 0;
    display:flex;
    padding:0px 5px 0px 5px;
}

nav ul.social li{
    flex: 1 1 0;
}

@media screen and (min-width:768px){
    nav ul{
        display:flex;
        justify-content:start;
    }
    nav li{
        flex: 1 1 0;
    }
    nav{
        display:flex;
        justify-content: space-between;
    }
    .social{
        margin:0;
        margin-right:5px;
    }
    nav a{
        border-radius:10px 10px 0px 0px;
    }
  }
</style>