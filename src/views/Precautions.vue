<template>
    <div class="precautions">
        <vue-headful
            title="Coronavirus Precautions | Coronavirus | WorldStatsInfo"
            description="Coronavirus precautions, coronavirus safety measures, coronavirus symptoms, coronavirus outbreak, Covid-19, coronavirus mask"
            og:url="https://worldstatsinfo.com/"
            og:type="website"
            og:title="Coronavirus Precautions"
            og:description="Coronavirus precautions, coronavirus safety measures, coronavirus symptoms, coronavirus outbreak, Covid-19, coronavirus mask"
            og:site_name="World Stats Info"
            og:image="https://worldstatsinfo.com/og-image.png"
            robots="index,follow"
        />
        <div class="row d-flex justify-content-center m-3">
            <div class="col-md-10">
                <h2>Precautions</h2>
                <div class="row">
                    <div class="col-md-6">
                        <p class="h5">Wash your hands frequently</p>
                        <p class="m-1"><i class="material-icons mr-1">pan_tool</i>Clean your hands regulary with a soap or a sanitizer to wash away virus from your hands.</p>
                        <p class="m-1"><i class="material-icons mr-1 md-24" data-toggle="tooltip" data-placement="top" title="Wash your hands frequently">help</i> Washing your hands keeps away virus from you and chances of infection will be low.</p>
                        <!--  -->
                        <br>
                        <p class="h5">Social distancing</p>
                        <p class="m-1"><i class="material-icons mr-1 ">voice_over_off</i>Maintain 1 - 3 metre distance from people who cough or sneeze and avoid crowded places.</p>
                        <p class="m-1"><i class="material-icons mr-1 md-24" data-toggle="tooltip" data-placement="top" title="Socail Distancing">help</i>Maintaining social distancing will make you less vulnerable to virus tranfering from the people who cough or sneeze.</p>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center">
                        <lottie-player
                            src="https://assets3.lottiefiles.com/packages/lf20_6R2HIH.json"  background="transparent"  speed="1"  style="width: 400px; height: 400px;"  loop  autoplay >
                        </lottie-player>
                    </div>
                </div>
                <!--  -->
                <div class="row">
                    <div class="col-md-6">

                    </div>
                    <div class="col-md-6">
                        <p class="h5">Do not touch your eyes, nose and mouth</p>
                        <p class="m-1"><i class="material-icons">touch_app</i>Do not touch your eyes, nose and mouth unneccesarily. Touching your eyes, nose and mouth may lead to infection if your hands contain the virus. If neccesary wash your hands thoroughly with soap or a sanitizer.</p>
                        <p class="m-1"><i class="material-icons mr-1 md-24" data-toggle="tooltip" data-placement="top" title="Donot touch your eyes, nose and mouth">help</i>Avoiding touching your eyes, nose and mouth will not transfer the virus.</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6">
                        <lottie-player
                            src="https://assets3.lottiefiles.com/packages/lf20_AQ3M8U.json"  background="transparent"  speed="1"  style="width: 400px; height: 400px;"  loop  autoplay >
                        </lottie-player>
                    </div>
                    <div class="col-md-6 mt-3">
                        <p class="h5">Maintain respiratory hygiene</p>
                        <p class="m-1"><i class="material-icons mr-1">pan_tool</i>When you cough or sneeze make sure you are using a tissue or handkerchief covering your mouth and nose. Dispose the tissue or handkerchief immediately after using it.</p>
                        <p class="m-1"><i class="material-icons mr-1 md-24" data-toggle="tooltip" data-placement="top" title="Maintain respiratory hygiene">help</i>Doing this may not spread the droplets you sneeze and stoping to infect others.</p>
                        <!--  -->
                        <br>
                        <p class="h5">If you have any of the <a href="/symptoms" class="text-primary">symptoms</a> contact hospital immediately.</p>
                        <p class="m-1"><i class="material-icons mr-1 ">local_hospital</i>It's better for a taking an advice from a medical assistant or contacing your nearest health care center.</p>
                        <p class="m-1"><i class="material-icons mr-1 md-24" data-toggle="tooltip" data-placement="top" title="If you have any of the symptoms contact hospital immediately">help</i>Doing this stops spread of infections.</p>
                        <br>
                        <p class="h5">Also check <a href="/dos" class="text-primary">Stop the spread</a></p>
                    </div>
                </div>
                z
                <!--  -->
                
                <br> <br>
            </div>  
        </div>
    </div>
</template>
<style>
.precautions
{
    background-color: rgb(224, 255, 224);
}
.material-icons:hover
{
 color: rgba(0, 0, 0, 0.54); 
}
.dos-icon
{
    vertical-align: middle !important;
}
</style>
<script>
import $ from 'jquery'
export default {
    mounted() {
      $(function () {
      $('[data-toggle="tooltip"]').tooltip()
      })
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')
      document.head.appendChild(recaptchaScript)
      
}}

</script>