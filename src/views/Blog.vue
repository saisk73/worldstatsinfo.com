<template>
    <div class="blog row d-flex justify-content-center">
        <vue-headful
            :title="blogname"
            :description="blog.description"
            :keywords="blog.seoKeywords"
            :og:url="'https://worldstatsinfo.com/blog/' + blog.name"
            og:type="website"
            :og:title="blogname"
            :og-description="blog.description"
            og:site_name="World Stats Info"
            :og:image="blog.image"
            robots="index,follow"
        />
        <div class="col-md-7">
            <h2>{{blogname}}</h2>
            <div class="d-flex">
                <img :src="blog.authorImage" class="author-image rounded-circle mr-2" alt="" srcset="">
                <div>
                    <p class="p-0 m-0 text-secondary">Blog by</p>
                    <a :href="blog.authorLink" target="_blank" class="p-0 m-0 h5 text-dark align-self-center">{{blog.author}}</a>
                </div>    
            </div>
            <div class="mt-3 row">
                <div class="col-md ml-2">
                    <p><span class="text-secondary">posted on:</span> {{moment(blog.datetime).format('MMMM Do YYYY, h:mm:ss A')}} </p>
                </div>
                <div class="col-md ml-2">
                    <span class="text-secondary mr-2">share on:</span>
                    <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://worldstatsinfo.com/blog/' + blogname" class="mr-3"><img src="../assets/facebook-icon.svg" class="social-icons-facebook" alt="" srcset=""></a>
                    <a :href="'https://twitter.com/intent/tweet?text=' + blogname +'%20https://worldstatsinfo.com/blog/' + blog.name" class="mr-3"><img src="../assets/twitter.svg" class="social-icons-twitter" alt="" srcset=""></a>
                    <a :href="'whatsapp://send?text=' + blogname +'%20https://worldstatsinfo.com/blog/' + blog.name" class="mr-3"><img src="../assets/whatsapp-symbol.svg" class="social-icons-whatsapp" alt="" srcset=""></a>
                </div>
            </div>
            <img :src="blog.image" class="blog-image" alt="" srcset="">
            <div v-html="blog.content" class="m-2">
            </div>
            <div class="d-flex justify-content-center">
                <div class="col-md-6">
                    <span class="text-secondary mr-2">share on:</span>
                    <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://worldstatsinfo.com/blog/' + blogname" class="mr-5"><img src="../assets/facebook-icon.svg" class="social-icons-facebook" alt="" srcset=""></a>
                    <a :href="'https://twitter.com/intent/tweet?text=' + blogname +'%20https://worldstatsinfo.com/blog/' + blog.name" class="mr-5"><img src="../assets/twitter.svg" class="social-icons-twitter" alt="" srcset=""></a>
                    <a :href="'whatsapp://send?text=' + blogname +'%20https://worldstatsinfo.com/blog/' + blog.name" class="mr-5"><img src="../assets/whatsapp-symbol.svg" class="social-icons-whatsapp" alt="" srcset=""></a>
                </div>
            </div>
            <div class="row d-flex justify-content-center m-2">
              <div class="col-md div-more rounded">
                <h5>Useful Info:</h5>
                <ul>
                  <li><a class="text-primary" href="/precautions">Precautions</a></li>
                  <li><a class="text-primary" href="/symptoms">Symptoms</a></li>
                  <li><a class="text-primary" href="/dos">Stop the spread</a></li>
                  <li><a class="text-primary" href="/blog">Blogs</a></li>
                </ul>
              </div>
            </div>
            <br> <br> <br>
        </div>
    </div>
</template>

<style>
.author-image
{
     width: 4rem;
    height: 4rem;
}
.blog-image
{
    width: 100%;
    height: 20rem;
    object-fit: cover;
}
.social-icons-facebook
{
     width: 1.7rem;
    height: 1.7rem;
}
.social-icons-twitter
{
    width: 1.9rem;
    height: 1.9rem;
}
.social-icons-whatsapp
{
    width: 1.9rem;
    height: 1.9rem;
}
</style>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
    data () {
    return {
      blog: [],
      blogname: ''
    }
  },
    mounted()
    {
      axios
        .get('https://blogapi.worldstatsinfo.com/blog/' + this.$route.params.blogname)
        .then(response => (this.blog = response.data, this.blogname = this.blog.name.replace(/-/g, ' ') )).catch((error)=>{
            if (error.response.status === 404) {
            this.$router.push('/');
            }
        })
    },
    methods:
    {
      moment
    }
}
</script>