<template>
    <div class="m-0 p-0">
        <nav class="fixed-top navbar navbar-bg shadow-sm p-sm-3 p-2 pb-3 pt-3 pb-md-2 pt-md-2" v-bind:class="{ 'color-nav-1': $route.path == '/','color-nav-2': $route.path == '/symptoms','color-nav-3': $route.path == '/precautions','color-nav-4': $route.path == '/dos', 'color-nav-5': $route.path == '/countries' }">
            <a class="navbar-brand text-decoration-none text-dark" href="/"><span class="text-dark">World</span><span class="text-success">StatsInfo</span></a>
            <div class="ml-auto d-none d-md-block">
                <button class="mdl-button mr-3 mdl-js-button nav-link-button text-dark" onclick="window.location.href = '/';"><router-link  class-active="active" class="text-decoration-none text-capitalize nav-links" to="/" exact>Stats</router-link></button>
                <button class="mdl-button mr-3 mdl-js-button nav-link-button text-dark" onclick="window.location.href = '/blog';"><router-link  class-active="active" class="text-decoration-none text-capitalize nav-links" to="/blog" exact>Blogs</router-link></button>
                <button class="mdl-button mr-3 mdl-js-button nav-link-button text-dark" onclick="window.location.href = '/symptoms';"><router-link  class-active="active" class="text-decoration-none text-capitalize nav-links" to="/symptoms" exact>Symptoms</router-link></button>
                <button class="mdl-button mr-3 mdl-js-button nav-link-button text-dark" onclick="window.location.href = '/precautions';"><router-link  class-active="active" class="text-decoration-none text-capitalize nav-links" to="/precautions" exact>Precautions</router-link></button>
                <a href=""></a>
            </div>
        </nav>
        <div class="fixed-bottom bottom-navbar shadow-lg d-md-none">
        <div class="row bg-white">
            <button  v-bind:class="{ 'color-nav-1': $route.path == '/','color-nav-2': $route.path == '/symptoms','color-nav-3': $route.path == '/precautions','color-nav-4': $route.path == '/dos' }" class="col p-1 bottom-nav-button mdl-js-button mdl-js-ripple-effect text-decoration-none text-dark" onclick="window.location.href = '/';"><div class="d-flex justify-content-center m-0"><i class="material-icons">equalizer</i></div><div class="row d-flex justify-content-center m-0">Stats</div></button>
            <button  v-bind:class="{ 'color-nav-1': $route.path == '/','color-nav-2': $route.path == '/symptoms','color-nav-3': $route.path == '/precautions','color-nav-4': $route.path == '/dos' }" class="col p-1 bottom-nav-button mdl-js-button mdl-js-ripple-effect text-decoration-none text-dark" onclick="window.location.href = '/blog';"><div class="d-flex justify-content-center m-0"><i class="material-icons">rss_feed</i></div><div class="row d-flex justify-content-center m-0">Blogs</div></button>
            <button  v-bind:class="{ 'color-nav-1': $route.path == '/','color-nav-2': $route.path == '/symptoms','color-nav-3': $route.path == '/precautions','color-nav-4': $route.path == '/dos' }" class="col p-1 bottom-nav-button mdl-js-button mdl-js-ripple-effect text-decoration-none text-dark" onclick="window.location.href = '/symptoms';"><div class="d-flex justify-content-center m-0"><i class="material-icons">local_hospital</i></div><div class="row d-flex justify-content-center m-0">Symptoms</div></button>
            <button  v-bind:class="{ 'color-nav-1': $route.path == '/','color-nav-2': $route.path == '/symptoms','color-nav-3': $route.path == '/precautions','color-nav-4': $route.path == '/dos' }" class="col p-1 bottom-nav-button mdl-js-button mdl-js-ripple-effect text-decoration-none text-dark" onclick="window.location.href = '/precautions';"><div class="d-flex justify-content-center m-0"><i class="material-icons">pan_tool  </i></div><div class="row d-flex justify-content-center m-0">Precautions</div></button>
        </div>
    </div>
    </div>
</template>

<style>
.bottom-nav-button
{
    background-color: rgb(255, 255, 255);
}
.color-nav-1
{
    background-color: rgb(255, 255, 255) !important;
}
.color-nav-2
{
    background-color: rgb(255, 219, 219) !important;
}
.color-nav-3
{
    background-color: rgb(224, 255, 224) !important;
}
.color-nav-4
{
    background-color: rgb(224, 255, 224) !important;  
}
.color-nav-5
{
    background-color: rgb(255, 255, 255) !important;
}
.navbar-bg
{
    background-color: rgb(255, 255, 255);
}
.router-link-active
{
    color: blue !important;
}
.nav-link-button:hover
{
    background-color: rgba(114, 205, 241, 0.336) !important;
}
.nav-links
{
    color: black;
}
.bottom-nav-button
{
   border: #fff;
}
.bottom-nav-button:focus
{
    outline: none;  
}
</style>