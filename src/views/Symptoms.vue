<template>
    <div class="symptoms">
        <vue-headful
            title="Coronavirus Symptoms | Corona Virus | WorldStatsInfo"
            description="Coronavirus Symptoms, coronavirus precautions, coronavirus outbreak, Covid-19, coronavirus mask"
            og:url="https://worldstatsinfo.com/"
            og:type="website"
            og:title="Coronavirus Symptoms"
            og:description="coronavirus symptoms, Coronavirus precautions, coronavirus outbreak, Covid-19, coronavirus mask"
            og:site_name="World Stats Info"
            og:image="https://worldstatsinfo.com/og-image.png"
            robots="index,follow"
        />
       <div class="row d-flex justify-content-center">
           <div class="col-md-10 m-3">
               <h2 class="">Symptoms</h2>
               <p class="">The COVID-19 virus affects different people by age. Covid-19 is a respiratory related disease that effects mainly on lungs. Covid-19 is more resisted to people of middle age as middle-aged people have more immune system and it is severly effected to old-aged people of age more than 60yrs.</p>
               <div class="row">
                   <div class="col-md-6">
                       <p class="h5">Common symptoms include:</p>
                        <ul class="text-secondary">
                            <li>fever</li>
                            <li>tiredness</li>
                            <li>dry cough</li>
                        </ul>
                        <p class="h5">Other Common Symptoms:</p>
                        <ul class="text-secondary">
                            <li>breathing problem</li>
                            <li>aches and pains</li>
                            <li>sore throat</li>
                            <li>few people can report diarrhoea, nausea or a runny nose.</li>
                        </ul>
                   </div>
                   <div class="col-md-6 d-flex justify-content-center">
                       <lottie-player
                           src="https://assets9.lottiefiles.com/private_files/lf30_hHODoj.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay >
                       </lottie-player>              
                    </div>
               </div>
               <br>
               <!--  -->
               <div class="row">
                   <div class="col-md-6">
                        <p class="h5 text-center">"People with the above symptoms should self-isolate and contact nearest Covid-19 testing center. It is better to maintain social distancing."</p>
                   </div>
               </div>
               <!--  -->
               <div class="row d-flex justify-content-center">
                   <div class="col-md-6 m-3">
                       <p class="h2 text-center text-robo text-secondary font-weight-lighter">Most Importantly Don't Panic</p>
                   </div>
               </div>
               <br> <br>
           </div>
       </div>
    </div>
</template>

<style>
.symptoms
{
    background-color: rgb(255, 219, 219);
}
</style>
<script>
export default {
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')
      document.head.appendChild(recaptchaScript)
    }
}

</script>