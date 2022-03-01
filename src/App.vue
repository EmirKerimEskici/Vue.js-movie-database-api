<template>
<router-view></router-view>

<div class="main-route">
  <router-link class="router-link" to="/popular">Popüler Filmlere git</router-link>
  
</div>

</template>
<script>


export default {
  name: 'App',

}
</script>

<style lang="scss">
.main-route{
  
  margin: auto;
  width: 290px;
}
.router-link{
  margin-left: 75px;
}

</style>
