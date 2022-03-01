<template>
  <div class="detaylar" >
    <h3 class="detail-film">Film Details</h3>
<div class="kart">
  <img :src="`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${film.poster_path}`" class="resim" :alt="`${film.title}`">
  <div class="aciklama">
  <h4 class="title">{{film.original_title}}</h4>
  <p>{{film.overview}}</p>
  <p>Film Rate : <strong>{{film.vote_average}}</strong></p>
  <p>Language : <strong>{{film.original_language}}</strong></p>
  <p>Date : <strong>{{film.release_date}}</strong></p>
  <p class="tagline"><strong>{{film.tagline}}</strong></p>
  </div>
</div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Detail',
  data() {
    return {
      film:'',
      apikey:process.env.VUE_APP_APIKEY
    }
  },
  created: function () {
    console.log(this.$route.params.id);
    const movieid=this.$route.params.id
    
    axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${this.apikey}`)
        .then(res => {
          this.film =res.data;
          console.log(this.film);
        })
  }
}
</script>
<style > 
.detail-film{
  text-align: center;
  color:rgb(7, 7, 7) ;
}
.kart{
  width: 400px;
  background: rgb(255, 255, 255);
  margin: auto;
  background: #324048;
}
.title{
  text-align: center;
  
}
.resim{
  width: 400px;
  height: 500px;
}
.aciklama{
  text-align: center;
  color: white;
}

</style>
