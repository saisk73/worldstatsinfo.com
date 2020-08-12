<template>
    <div class="blogs" >
      <vue-headful
            title="Blogs"
            description="Stay updated with latest information on coronavirus"
            og:url="https://worldstatsinfo.com/blog"
            og:type="website"
            og:title="Worldstatsinfo Blogs"
            og-description="Stay updated with latest information on coronavirus"
            og:site_name="World Stats Info"
            og:image="https://worldstatsinfo.com/og-image.png"
            robots="index,follow"
        />
      <br>
        <div class="container">
          <h2 class="">Latest Updates</h2>
          <p class="h5">Stay updated with updates regarding covid-19.</p>
          <div class="row">

            <div class="col-lg-3 blog-card rounded shadow-sm m-3 align-self-center align-content-center p-0" v-for="blog in blogs" :key="blog.id">
              <img :src="blog.image" class="rounded-top blog-thumbnail" alt="">
              <div class="p-2">
                <p class="h4 description-name">{{blog.name.replace(/-/g, ' ')}}</p>
                <p class="text-secondary description-text">{{blog.description}}</p>
                <div class="d-flex text-truncate">
                  <div class="col text-truncate">
                    <img :src="blog.authorImage" class="author-image rounded-circle mr-2" alt="" srcset="">
                    <span class="align-self-center h5">{{blog.author}}</span>
                  </div>                  
                    <div class="col d-flex justify-content-end">
                    <a :href="'/blog/' + blog.name"><button class="mdl-button view-btn mdl-js-button border text-primary">View Blog</button></a>
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                </div>
              </div>
            </div>

          </div>
        </div>
        <br> <br> <br>
    </div>
</template>


<style>
.blog-thumbnail
{
  width: 100%;
  height: 10rem;
  object-fit: cover;

}
.blog-card
{
  
}
.author-image
{
   width: 3rem;
  height: 3rem;
}
.view-btn:hover
{
  background-color: rgba(67, 222, 243, 0.39) !important;
}
.description-name
{
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1; 
   -webkit-box-orient: vertical;
}
.description-text
{
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1; 
   -webkit-box-orient: vertical;
}
</style>


<script>
import axios from 'axios'
export default {
    data () {
    return {
      blogs: [],
      test: []  
    }
  },
    mounted()
    {
      axios
        .get('https://blogapi.worldstatsinfo.com/blog/')
        .then(response => (this.blogs = response.data.reverse()) )
    }
}
</script>