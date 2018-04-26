import blogCreate from './components/blogCreate.vue';
import blogShows from './components/blogShow.vue';
import blogList from './components/blogList.vue';
import blogSingle from './components/blogSingle.vue';

export default[
    {path:'/', component:blogShows},
    {path:'/add', component:blogCreate},
    {path:'/titles', component:blogList},
    {path:'/blog/:id', component:blogSingle}
]