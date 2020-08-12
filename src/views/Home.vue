<template>
  <div class="home">
    <vue-headful
            :title="'Coronavirus Live Update : ' +stats.cases + ' cases from Covid-19 virus outbeak' "
            description="COVID19 pandemic outbreak : Track coronavirus live updates, news and statistics of infections, deaths and recoveries registered globally .now more!, Coronavirus live update and statistics. WorldStatsInfo displays Corona Virus Cases Stats in real-time."
            og:url="https://worldstatsinfo.com/"
            og:type="website"
            :og:title="'Coronavirus Live Update : ' +stats.cases + ' cases from Covid-19 virus outbeak' "
            og:description="COVID19 pandemic outbreak : Track coronavirus live updates, news and statistics of infections, deaths and recoveries registered globally .now more!, Coronavirus live update and statistics. WorldStatsInfo displays Corona Virus Cases Stats in real-time."
            og:site_name="World Stats Info"
            og:image="https://worldstatsinfo.com/og-image.png"
            robots="index,follow"
        />
    <div class="row div-main d-flex justify-content-center p-3 m-0">
      <div class="col-md-8 div-main-stats col-sm rounded bg-white shadow m-3 pt-4 pb-5">
          <div class="">
            <p class="h2 font-weight-light text-center">Coronavirus Stats <span class="h6 bg-danger text-white p-1 rounded live-text">LIVE</span></p>
          </div>
          <div class="row d-flex justify-content-center">
            <pie-chart style="height:13rem; width:16rem" :colors="['rgb(72, 201, 78)','rgb(255, 90, 78)', 'rgb(189, 189, 189)']" :data="[['Recovered', stats.recovered], ['Deaths', stats.deaths],['Active', stats.cases-(stats.recovered + stats.deaths)]]"></pie-chart>           
          </div>
          <div class="div-stats">
            <div class="">
              <p class="text-center font-weight-bold h1">{{stats.cases}}</p>
              <p class="h5 text-center text-secondary">Total Cases</p>
            </div>
            <div class="row">
              <div class="col d-flex justify-content-center mt-3">
                <div class="rounded row shadow-sm div-cards div-cards-recovered align-self-sm-start" style="width:20rem">
                  <div class="d-flex justify-content-center align-content-center">
                    <i class="material-icons md-36">emoji_people</i>
                  </div>
                  <div class="col">
                    <p class="h6 text-white m-0 ">Total Recovered</p>
                    <p class="h3 text-white m-0 font-weight-light">{{stats.recovered}}</p>
                  </div>
                </div>
              </div>

              

              <div class="col d-flex justify-content-center mt-3">
                <div class="rounded row shadow-sm div-cards div-cards-deaths" style="width:20rem">
                  <div class="d-flex justify-content-center align-content-center">
                    <i class="material-icons md-36">sentiment_very_dissatisfied</i>
                  </div>
                  <div class="col">
                    <p class="h6 text-white m-0 ">Total Deaths</p>
                    <p class="h3 text-white m-0 font-weight-light">{{stats.deaths}}</p> 
                  </div>  
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <!-- last updated -->
    <div class="row d-flex justify-content-center m-0">
      <div class="col-md-8">
        <p class="text-secondary text-center"><i class="material-icons md-24">update</i> Last Updated on: {{moment(date).fromNow()}}</p>
      </div>
    </div>
    <!-- /last updated -->

    <!-- stats cards -->
    <div class="row d-md-flex justify-content-center m-0">
      <div class="col-md-10 row justify-content-between">
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_cases.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col">
                  <h5 class="p-0 m-0">Cases</h5>
                  <p  class="p-0 m-0">{{stats.cases}}</p>
              </div>
          </div>
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_cases.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col">
                  <h5 class="p-0 m-0">Cases Today</h5>
                  <p  class="p-0 m-0">+ {{stats.todayCases}}</p>
              </div>
          </div>
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_deaths.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col">
                  <h5 class="p-0 m-0">Deaths</h5>
                  <p  class="p-0 m-0">{{stats.deaths}}</p>
              </div>
          </div>
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_deaths.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col">
                  <h5 class="p-0 m-0">Deaths Today</h5>
                  <p  class="p-0 m-0">+{{stats.todayDeaths}}</p>
              </div>
          </div>
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_recovered.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col">
                  <h5 class="p-0 m-0">Recovered</h5>
                  <p  class="p-0 m-0">{{stats.recovered}}</p>
              </div>
          </div>
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_active.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col">
                  <h5 class="p-0 m-0">Active</h5>
                  <p  class="p-0 m-0">{{stats.cases}}</p>
              </div>
          </div>
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_cases.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col">
                  <h5 class="p-0 m-0">Critical</h5>
                  <p  class="p-0 m-0">{{stats.critical}}</p>
              </div>
          </div>
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_tests.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col text-truncate">
                  <h5 class="p-0 m-0">Tests Conducted</h5>
                  <p  class="p-0 m-0">{{stats.tests}}</p>
              </div>
          </div>
          <div class="col-md-3 row m-3 rounded shadow p-3">
              <div class="col-3">
                  <img src="../assets/icons/card_earth.svg" class="card-icons" alt="" srcset="">
              </div>
              <div class="col text-truncate">
                  <h5 class="p-0 m-0">Countries affected</h5>
                  <p  class="p-0 m-0">{{stats.affectedCountries}}</p>
              </div>
          </div>
          <!--  -->
      </div>
    </div>

    <!-- /stats cards -->

    <br>
    <br>
    <!-- usefulinfo-pill -->
    <div class="row d-flex justify-content-center m-0">
      <div class="col-md-10">
        <span class="h4 text-white usefulinfo-pill ml-4 p-2 pl-3 pr-3 rounded-pill">Pages</span>
      </div>
    </div>
    <!-- /usefulinfo-pill -->
    
    <!-- useful info -->
    <div class="row d-flex justify-content-center m-0">
      <div class="col-md-10 row">
        <div class="col-md m-4 shadow rounded p-2">
          <div class="col">
            <img src="../assets/icons/hands-and-gestures.svg" class="usefulinfo-icons" alt="" srcset="">
            <h5 class="">Precautions</h5>
            <p class="text-secondary">Know the precautions to stop the spread of Covid-19</p>
            <a href="/precautions" class="mdl-button mdl-js-button mdl-js-ripple-effect text-primary btn-usefulinfo">VIEW PAGE</a>
          </div>
        </div>
        <div class="col-md m-4 shadow rounded p-2">
          <div class="col">
            <img src="../assets/icons/high-temperatures.svg" class="usefulinfo-icons" alt="" srcset="">
            <h5 class="">Symptoms</h5>
            <p class="text-secondary">Know the symptoms of covid-19</p>
          </div>
          <br>
          <a href="/symptoms" class="align-self-end mdl-button mdl-js-button mdl-js-ripple-effect text-primary btn-usefulinfo">VIEW PAGE</a>
        </div>
        <div class="col-md m-4 shadow rounded p-2">
          <div class="col">
            <img src="../assets/icons/stop.svg" class="usefulinfo-icons" alt="" srcset="">
            <h5 class="">Stop the spread</h5>
            <p class="text-secondary">Know Dos and Donts to stop the spread of covid-19</p>
            <a href="/dos" class="align-self-end mdl-button mdl-js-button mdl-js-ripple-effect text-primary btn-usefulinfo">VIEW PAGE</a>
          </div>
        </div>
      </div>
    </div>
    <!--/useful info  -->

    <!-- cases -->
    <div class="row d-flex justify-content-center m-0">
      <div class="col-md-10 m-3">
        <h3 class="font-weight-lighter">Cases by Countries</h3>
        <p class="m-1">Covid-19 has till now affected <span class="font-weight-bold text-dark">{{t_countries}}</span> countries</p>
        <p class="m-1">Cases by countries Covid-19 affected data includes Cases · Today Cases · Deaths · Recovered · Active · Critical</p>
      </div>
    </div>

    <!-- cases cards -->
    <div class="row d-flex justify-content-center m-0">
      <div class="col-md-10 row">
        <div class="col-md-3"></div>
      </div>
    </div>
    <!-- /cases cards -->
    
    <div class="row d-flex justify-content-center m-0">
      <div class="col-md-10">
        <p class="text-secondary">**click on country for individual data</p>
        <!-- toggle yesterday -->
        <form action="post">
          <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
            <input type="radio" id="option-1" @change="onChange($event)" class="mdl-radio__button mdl-js--blue" name="options" v-model="yesterday" value="0" checked>
            <span class="mdl-radio__label">Today</span>
          </label>
          &nbsp;
          <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
            <input type="radio" id="option-2" @change="onChange($event)" class="mdl-radio__button" v-model="yesterday" name="options" value="1">
            <span class="mdl-radio__label">Yesterday</span>
          </label>
        </form>
        <!-- /toggle yesterday -->
        <!-- search -->
        <!-- <input type="text" v-model="search" id=""> -->
        <!-- search -->
      </div>
    </div>
    <br>
    <div class="row d-flex justify-content-center m-0">
      <div class="col-md-10 table-div col-sm d-lg-flex justify-content-md-center table-responsive">
        <!-- <input type="text" v-model="search" placeholder="enter countries"> -->
        <table id="myTable" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp w-100">
          <thead class="bg-table-head text-white">
            <tr>
              <th class="border-right text-left">Country</th>
              <th class="border-right ">Cases</th>
              <th class="border-right">Today</th>
              <th class="border-right">Today Deaths</th>
              <th class="border-right">Deaths</th>
              <th class="border-right">Recovered</th>
              <th class="border-right">Active</th>
              <th class="border-right">Critical</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-secondary text-white">
              <td class="border-right font-weight-bolder text-left">World</td>
              <td class="border-right font-weight-bolder text-left"> {{table_all.cases}}</td>
              <td class="border-right font-weight-bolder text-left">+{{table_all.todayCases}}</td>
              <td class="border-right font-weight-bolder text-left">+{{table_all.todayDeaths}}</td>
              <td class="border-right font-weight-bolder text-left"> {{table_all.deaths}}</td>
              <td class="border-right font-weight-bolder text-left"> {{table_all.recovered}}</td>
              <td class="border-right font-weight-bolder text-left"> {{table_all.active}}</td>
              <td class="border-right font-weight-bolder text-left"> {{table_all.critical}}</td>
            </tr>
            <tr v-for="(country, i) in world" :key="i">
              <td class="border-right font-weight-bolder text-left" style="overflow: hidden; text-overflow: ellipsis; max-width: 10rem;"><router-link class="country-links" :to="{name: 'Countries', params: {country: country.country}}"><img :src="country.countryInfo.flag" style="width:1.5rem;" alt="" srcset=""> <span class="text-truncate">{{country.country}}</span></router-link></td>
              <td class="border-right font-weight-bold text-left ">{{country.cases}}</td>
              <td class="border-right font-weight-bold text-left bg-danger text-white">+{{country.todayCases}}</td>
              <td class="border-right font-weight-bold text-left">+{{country.todayDeaths}}</td>
              <td class="border-right font-weight-bold text-left ">{{country.deaths}}</td>
              <td class="border-right font-weight-bold text-left text-success">{{country.recovered}}</td>
              <td class="border-right font-weight-bold text-left  text-primary">{{country.active}}</td>
              <td class="border-right font-weight-bold text-left ">{{country.critical}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br> <br>
    <div class="row updates-div d-flex justify-content-center m-0">
      <div class="col-lg-10 p-2">
        <div class="col">
          <h3 class="m-1">Updates</h3>
          <p  class="m-1">Get latest updates daily about Covid-19</p>
        </div>
        <!-- updates cards -->
        <div class="pl-4">
          <div class="col-md row updates-card shadow rounded-lg pr-0 mt-4" v-for="(update, i) in updates" :key="i">
          <div class="col p-2">
            <div class="m-1 p-0 mt-2" v-html="update.update"></div>
            <p   class="m-1 p-0 text-secondary">{{moment(update.datetime).fromNow()}}</p>
          </div>
          <div class="col-md-1 col-2 d-flex align-items-center justify-content-center rounded-right updates-source">
            <a class="mdl-button mdl-js-button mdl-button--icon text-dark updates-source-icon" :href="update.source">
              <i class="material-icons text-white">link</i>
            </a>
          </div>
        </div>
        </div>
        <!--/updates cards -->
      </div>
    </div>

    <br> <br> <br>
  </div>
</template>
<style>
thead tr:first-child th { 
  position: sticky; 
  top: 0;
  background-color: rgb(155, 155, 155);
  z-index: 1;
}
.table-div
{
  height:30rem; 
  overflow-y:scroll;
}
.table-div::-webkit-scrollbar {
    width: 10px;
}
 
.table-div::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 6px 6px 6px 6px rgba(224, 224, 224, 0.3); 
    border-radius: 10px;
}
 
.table-div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 30px;
    -webkit-box-shadow: inset 6px 6px 6px 6px rgba(192, 192, 192, 0.5); 
}
.div-main-stats
{
  margin-left: 1rem !important;
}
.div-main
{
    background: #FAFEC5;
  background-image: linear-gradient(
    to bottom,
    rgb(194, 194, 194) 60%,
    white 50%,
    white 50%,
    rgb(255, 255, 255) 50%
  );
}
.country-links
{
  color: blue;
  border-bottom-color:2px solid blue !important;
}
.div-more
{
  background-color: rgb(212, 212, 212);
}
.div-cards
{
  max-width: 13rem;
     padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.4rem;
}
.div-cards-recovered
{
  background-color: rgb(72, 201, 78) !important;
}
.div-cards-deaths
{
  background-color: rgb(223, 50, 50) !important;
}
.live-text
{
  letter-spacing: 2px;
  animation: live 1s infinite;
}
@keyframes live
{
  from{opacity: 1;}
  to  {opacity: 0.7;}
}
.align-baseline
{
  vertical-align: baseline !important;
}
/* useful info */
.usefulinfo-pill
{
  background-color: #08b6eb;
}
.usefulinfo-icons
{
   width: 3rem;
  height: 3rem;
}
.btn-usefulinfo:hover
{
  background-color: #08b6eb56 !important;
  text-decoration: none;
}
/* updates card */
.updates-card
{
  background-color: rgba(255, 255, 255, 0.651);
  min-height: 5rem;
}
.updates-card a 
{
  color: rgb(0, 162, 255);
}
.updates-source
{
  background: linear-gradient(to right, #ffffff 40%, rgb(167, 225, 252));
}
.updates-source-icon
{
  background-color:#08b6eb !important;
}
/* yesterday radio */
.mdl-radio__outer-circle
{
  border-color: #08b6eb !important;
}
.mdl-radio__inner-circle
{
    background-color:#08b6eb !important;
}
</style>

<script>
import moment from 'moment'
import axios from 'axios'
export default({
  components:{
  },
  data () {
    return {
      stats: [],
      world: [],
      updates: [],
      date: [],
      t_countries : [],
      india: [],
      indiahistory: [],
      yesterday: 0,
      table_all : [],
      // search
      search: ''
    }
  },
  async mounted () {
    axios
      .get('https://corona.lmao.ninja/v2/all')
      .then(response => (this.stats = response.data, this.date = response.data.updated))
    axios
      .get('https://corona.lmao.ninja/v2/countries?sort=cases')
      .then(response => (this.t_countries = Object.keys(response.data).length, this.world = response.data))
    // table all
    axios
        .get('https://corona.lmao.ninja/v2/all?yesterday=' + this.yesterday)
        .then(response => (this.table_all = response.data))
    axios
      .get('https://blogapi.worldstatsinfo.com/update')
      .then(response => (this.updates = response.data.reverse()))
    console.log(this.yesterday)
  },
  methods:
  {
    moment,
    onChange(event)
    {
      axios
        .get('https://corona.lmao.ninja/v2/countries?yesterday=' + this.yesterday+ '&sort=cases')
        .then(response => (this.t_countries = Object.keys(response.data).length, this.world = response.data, console.log(this.yesterday)))
      axios
        .get('https://corona.lmao.ninja/v2/all?yesterday=' + this.yesterday)
        .then(response => (this.table_all = response.data))
    }
  },
  computed:{ 

     


  }
})
</script>
