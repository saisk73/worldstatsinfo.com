<template>
  <div id="app">
    <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <Navbar />
    <router-view style="padding-top:3rem"/>
  </div>
</template>
<style>
.text-robo, p, span,h1,h2,h3,h4,h5,li
{
  font-family: 'Roboto', sans-serif;
}
/* Rules for sizing the icon. */
.material-icons.md-18 { font-size: 18px; vertical-align:bottom !important;}
.material-icons.md-24 { font-size: 24px; vertical-align:bottom !important;}
.material-icons.md-36 { font-size: 36px; vertical-align:bottom !important;}
.material-icons.md-48 { font-size: 48px; vertical-align:bottom !important;}
</style>

<script>
import Navbar from './views/common/Navbar'
export default {
  name: 'app',
  components:{
    Navbar
  },
  data () {
    return {
    }
  },
}
</script>