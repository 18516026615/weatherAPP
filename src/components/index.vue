<template>
  <div class='weather'>
    <div class='weather_top'>
        <div class='weather_top_content'>
          <h2>{{GetWeather.weather}}</h2>
          <h4>{{citydata.city}} {{citydata.province}}</h4>  
          <h1>{{GetWeather.data | filter}}</h1>
          <img src='./../../static/img/logo_e.png'> 
        </div>
    </div>
    <div class='weather_bottom'>
        <ul>
          <li v-for='(list,index ) in GetWeather.completeData'>
            <router-link :to='{name:"info",params:{id:index} }' :class=" index==0 ? 'active' : '' ">
              <span>{{list.date | week}}</span>
              <span>{{list.temperature}}</span>
            </router-link>
          </li>
      
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  
  mounted(){
    this.GetUserIpAddress()
  },
  data () {
      return {
        citydata:{},
        GetWeather:{
            weather:'',
            data:'',
            completeData: [],
        }
      }
  },
  filters :{
    filter (val){
      return val.slice(-3,-1)
    },
    week (val){
      return val.slice(0,2)
    }
  },
  methods : {
    GetUserIpAddress () {
          this.$http.get(this.$config.GetUserIp)
          .then(success => {
            console.log(success.data.ip);
            this.GetUserAddress(success.data.ip)
          })
          .catch (error=> {
            $.toast('请检查你的网络')
          })
        },

        GetUserAddress (ips) {
            console.log('ips')
              this.$http.jsonp( this.$config.GetUserAddress,{
                params : {
                  ak : this.$config.iplink.ak,
                  ip: ips 
                }
              } )
              .then( success => {
                console.log(success);
                this.citydata=success.data.content.address_detail,
                this.GetWeatherdata()
                
              } )
              .catch( error => {
                $.toast('请检查你的网络')
              } )
        },

        GetWeatherdata () {
          console.log('1')
              this.$http.jsonp( this.$config.GetWeather , {
                params : {
                  location : this.citydata.city,
                  output : this.$config.iplink.output,
                  ak: this.$config.iplink.ak,
                   
                }
              } )
              .then( success => {
                  console.log(success)
                   let wea = success.data.results[0].weather_data[0]
                    // 天气状况
                    this.GetWeather.weather = wea.weather
                    // 实时温度
                    this.GetWeather.data = wea.date
                    this.GetWeather.completeData=success.data.results[0].weather_data

              } )
              .catch( error => {
                  $.toast('请检查你的网络')
              } )
        }

    }

}
</script>

<style scoped>
    .weather{
      position:absolute;
      top:0;
        background: -webkit-linear-gradient(#dd4879 , #fdd73f);
  background: -o-linear-gradient(#dd4879 , #fdd73f);
  background: -moz-linear-gradient(#dd4879 , #fdd73f);
  background: linear-gradient(#dd4879 , #fdd73f);
    }
    .weather_top{

        box-sizing:border-box;
    }
    .weather_top_content{
      padding-top:60px;
      box-sizing:border-box;
    }
    .weather_top_content h2,h4{
      color:#fff;
      text-align:center; 
    }
    .weather_top_content h1{
      margin:0;
      font-size:90px;
      color:#fff;
      text-align:center; 
    }
    img{
      width:100%;
      height:auto;
      margin-top:30px;
      margin-bottom:-7px;
    }
    .weather_bottom{
        background:#fff;
    }
    .weather_bottom li{
      list-style:none;
      border:1px solid #efefef;
     
    }
    .weather_bottom li a{
      display:block;
      color:#000;
     margin:27px 20px; 
     display:flex;
     justify-content:space-between;
    }
    .active{
      color:red !important;
    }
</style>
