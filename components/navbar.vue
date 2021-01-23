<template>
  <div id="navbar" class="center">
    <vs-navbar text-white color="success" center-collapsed v-model="active">
      <template #left>
        <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt />
      </template>
      <template #right>
        <vs-navbar-item :key="cat.categoryId" @click="goTo(cat.categoryId)" v-for="cat in categories" :active="active == cat.categoryId" :id="cat.categoryId">{{cat.categoryName}}</vs-navbar-item>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ['categories'],
  data() {
    return {
      active:'0',
    }
  },
  mounted(){
    this.active = this.$route.params.id;
  },
    methods:{
      goTo(t){
        this.$router.push({path:'/categories/'+t})
      }
    }
};
</script>
<style>
#navbar{
 margin-bottom:50px;
}
</style>