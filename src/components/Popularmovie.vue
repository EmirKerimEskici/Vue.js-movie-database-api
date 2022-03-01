<template>
  <div class="main-vue">
    <div class="film">
      <div class="top-msg">
     <h4 class="top-h4">POPULAR FILMS</h4>
   </div>
    <div class="col">
      <br>
      <router-link class="main-page" to="/">AnaSayfa</router-link>
      <br>
       <input v-on:input="changes" v-model="searchedFilm" id="input-film" type="text" class="form-control" placeholder="Search...">
       <br>
      <button class="btn btn-danger" type="button" id="deletes" v-on:click="cleanFilm()">Clean</button>
    </div>
      <div class="container">
        <div class="row">
          <div class="input-group mb-3">
            <div class="input-group-append">
            </div>
          </div>
          <div class="col-lg-4 col-md-6  col-s-6 col-xs-6 film-card" v-for="movie in resultQuery" :key="movie">
            <ul>
              <li style="width:100%"><h4>{{ movie.original_title }}</h4>
              </li>
              <li>{{ 'IMDB' + ' ' + movie.vote_average }}</li>
              <li>{{ movie.original_language }}</li>
              <router-link :to="`/details/`+movie.id"><button>Details</button></router-link>
            </ul>
            <img :src="`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`" :alt="`${movie.title}`">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
console.log('api key :'+ process.env.VUE_APP_APIKEY);
export default {
  name: 'popular',
  data() {
    return {
      movies: [],
      description: '',
      searchedFilm: '',
      isHidden: false,
      apikey:process.env.VUE_APP_APIKEY,
      datas: '',
    }
  },
  methods: {
    changes: function (e) {
      this.description = e.target.value
      console.log(this.description)
    },
    searchFilm() {
      console.log(this.searchedFilm);
    },
    cleanFilm() {
      this.searchedFilm = ''
    },
  },
  computed: {
    resultQuery(){
      if(this.searchedFilm){
      return this.movies.filter((movie)=>{
        return this.searchedFilm.toLowerCase().split(' ').every(i => movie.title.toLowerCase().includes(i))
      })
      }else{
        return this.movies;
      }
    }
  },
  watch:{
    resultQuery(val){
      this.datas=`datas: ${val}`
    }
  },
  created: function () {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apikey}`)
        .then(res => {
          this.movies = res.data.results;
          console.log(this.movies)
        })
  },
}
</script>
<style lang="scss">
.film {
  background:#516270 ;
  .film-card {
    display: block;
    padding: 15px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      background-color: black;
      width: calc(100% - 30px);
      height: 200px;
      z-index: 100;
      opacity: 0.7;
      bottom: 2%;
    }
    img {
      width: 100%;
      position: relative;
    }
    h4 {
      position: absolute;
      z-index: 302;
      bottom: 100%;
      margin-bottom: 25px;
      color: #fff;
      font-size: calc(20px);
    }
    ul {
      display: flow-root;
      list-style: none;
      position: absolute;
      z-index: 2312;
      bottom: 10%;
      width: 100%;
      padding-left: 10px;
      li {
        float: left;
        width: 33.3%;
        color: #fff;
      }
    }
  }
   .film-card:hover{
     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    #h1{
      float: right;
    }
}
#btn-show{
  text-align: center;
  margin: auto;
  display: flex;
  margin-top: 25px;
}
.top{
  background: #41A49D;
  height: 150px ;
}
#input-film{
  margin-top: 25px;
}
#search{
  margin-top: 23px;
}
#deletes{
  margin-top: 5px;
  width: 70px;
  margin-left:23px;
}
.col{
height: 350px;
background: rgb(78, 78, 78);
margin-top: 31px;
float: right;
width: 120px;
margin-right: 5px;
}
.main-page{
  margin-left: 20px;
}
.top-h4{
  text-align: center;
  color: #fff;
}
.container{
  margin-left: -10px;
}
</style>