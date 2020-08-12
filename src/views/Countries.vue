<template>
    <div class="countries">
        <vue-headful
            :title="'Coronavirus cases in ' + countrydata.country + ' : ' + countrydata.cases "
            :description="'Coronavirus has effected ' + countrydata.cases + ' people in ' + countrydata.country "
            og:url="https://worldstatsinfo.com/"
            og:type="website"
            :og:title="'Coronavirus has effected ' + countrydata.cases + ' people in ' + countrydata.country + ' | WorldStatsInfo' "
            :og-description="'Coronavirus has effected ' + countrydata.cases + ' people in ' + countrydata.country "
            og:site_name="World Stats Info"
            og:image="https://worldstatsinfo.com/og-image.png"
            robots="index,follow"
        />
        <div class="m-3">
            <!-- <div>{{countrydata.data.country}}</div> -->
            <div class="row d-flex justify-content-center">
                <a href="/" class="m-3 text-primary"><i class="material-icons md-18">arrow_back</i> back to home</a>
            </div>
            <div class="row d-flex justify-content-center">
                <img :src="countrydata.countryInfo.flag" style="width:20rem;" alt="" srcset="">
            </div>
            <h2 class="text-center">{{ countrydata.country}}</h2>
            <div class="">
                <h3 class="m-0 text-center">{{countrydata.cases}}</h3>
                <p  class="m-0 text-center text-secondary">Total Cases</p>
            </div>
            <!--  -->
            <div class="row d-flex justify-content-center">
                <div class="col-md-4">
                  <line-chart class="bg-cases-chart rounded p-2" xmin="2020-04-07" :colors="['#123f3e', '#666']" :data="indiahistory.timeline.cases"></line-chart>
                  <p class="text-center">Cases in {{countrydata.country}}</p>
                </div>
                <div class="col-md-4">
                  <line-chart class="bg-deaths-chart rounded p-2" xmin="2020-04-07" :colors="['#b00', '#666']" :data="indiahistory.timeline.deaths"></line-chart>
                  <p class="text-center">Deaths in {{countrydata.country}}</p>
                </div>
            </div>
        </div>
        <!-- /graphs -->

        <!-- stats -->

        <div class="row d-md-flex justify-content-center">
            <div class="col-md-6 row justify-content-between">
                <div class="col-md-5 row m-3 rounded shadow p-3">
                    <div class="col-3">
                        <img src="../assets/icons/card_cases.svg" class="card-icons" alt="" srcset="">
                    </div>
                    <div class="col">
                        <h5 class="p-0 m-0">Cases</h5>
                        <p  class="p-0 m-0">{{countrydata.cases}}</p>
                    </div>
                </div>
                <div class="col-md-5 row m-3 rounded shadow p-3">
                    <div class="col-3">
                        <img src="../assets/icons/card_cases.svg" class="card-icons" alt="" srcset="">
                    </div>
                    <div class="col">
                        <h5 class="p-0 m-0">Cases Today</h5>
                        <p  class="p-0 m-0">+ {{countrydata.todayCases}}</p>
                    </div>
                </div>
                <div class="col-md-5 row m-3 rounded shadow p-3">
                    <div class="col-3">
                        <img src="../assets/icons/card_deaths.svg" class="card-icons" alt="" srcset="">
                    </div>
                    <div class="col">
                        <h5 class="p-0 m-0">Deaths</h5>
                        <p  class="p-0 m-0">{{countrydata.deaths}}</p>
                    </div>
                </div>
                <div class="col-md-5 row m-3 rounded shadow p-3">
                    <div class="col-3">
                        <img src="../assets/icons/card_deaths.svg" class="card-icons" alt="" srcset="">
                    </div>
                    <div class="col">
                        <h5 class="p-0 m-0">Deaths Today</h5>
                        <p  class="p-0 m-0">+{{countrydata.todayDeaths}}</p>
                    </div>
                </div>
                <div class="col-md-5 row m-3 rounded shadow p-3">
                    <div class="col-3">
                        <img src="../assets/icons/card_recovered.svg" class="card-icons" alt="" srcset="">
                    </div>
                    <div class="col">
                        <h5 class="p-0 m-0">Recovered</h5>
                        <p  class="p-0 m-0">{{countrydata.recovered}}</p>
                    </div>
                </div>
                <div class="col-md-5 row m-3 rounded shadow p-3">
                    <div class="col-3">
                        <img src="../assets/icons/card_active.svg" class="card-icons" alt="" srcset="">
                    </div>
                    <div class="col">
                        <h5 class="p-0 m-0">Active</h5>
                        <p  class="p-0 m-0">{{countrydata.cases}}</p>
                    </div>
                </div>
                <div class="col-md-5 row m-3 rounded shadow p-3">
                    <div class="col-3">
                        <img src="../assets/icons/card_cases.svg" class="card-icons" alt="" srcset="">
                    </div>
                    <div class="col">
                        <h5 class="p-0 m-0">Critical</h5>
                        <p  class="p-0 m-0">{{countrydata.critical}}</p>
                    </div>
                </div>
                <div class="col-md-5 row m-3 rounded shadow p-3">
                    <div class="col-3">
                        <img src="../assets/icons/card_tests.svg" class="card-icons" alt="" srcset="">
                    </div>
                    <div class="col text-truncate">
                        <h5 class="p-0 m-0">Tests Conducted</h5>
                        <p  class="p-0 m-0">{{countrydata.tests}}</p>
                    </div>
                </div>
                <!--  -->
            </div>
        </div>

        <!-- /stats -->
        <div class="row d-flex justify-content-center m-2">
          <div class="col-md-7 shadow-sm usefulinfo-div rounded">
            <h5>Useful Info:</h5>
            <ul>
              <li><a class="text-primary" href="/precautions">Precautions</a></li>
              <li><a class="text-primary" href="/symptoms">Symptoms</a></li>
              <li><a class="text-primary" href="/dos">Stop the spread</a></li>
            </ul>
          </div>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>

<style>
.bg-cases-chart
{
    background-color: rgb(189, 255, 198);
}
.bg-deaths-chart
{
    background-color: rgb(252, 186, 186);
}
.usefulinfo-div
{
    background-color: aliceblue;
}
.card-icons
{
    width: 3rem;
    height: 3rem;
}
</style>

<script>
import axios from 'axios'
export default {
    data () {
    return {
      countrydata: [],
      indiahistory: []
    }
  },
    mounted()
    {
      axios
        .get('https://corona.lmao.ninja/v2/countries/' + this.$route.params.country)
        .then(response => (this.countrydata = response.data)).catch((error)=>{
            if (error.response.status === 404) {
            this.$router.push('/');
            }
        })
      axios
        .get('https://corona.lmao.ninja/v2/historical/' +this.$route.params.country)
        .then(response => (this.indiahistory = response.data, console.log(response.data)))
    
    }
}
</script>