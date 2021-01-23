<template>
    <div id="category" class="grid">
    <Navbar :categories="categories" />
    <h3 class="title">{{catName.toUpperCase() }} | page - {{current}}</h3>
    <Loader v-if="isLoading" />
    <Products v-if="!isLoading" :products="products" />
    <div class="center">
      <vs-pagination
      v-if="!isLoading"
      color="success"
      @input="pageClick"
      v-model="current" :length="products.length" />
    </div>
  </div>
</template>

<script>
import Navbar from './../../components/navbar.vue'
import Products from './../../components/products.vue'
export default {
    components:{
        Products,
        Navbar
    },
    data(){
        return{
            catName:'',
            current:'1',
            products:[],
            categories:[],
            isLoading:false
        }
    },
    mounted(){
        this.categoryId = this.$route.params.id;
        this.categories = this.$store.getters.getCategories;
        this.catName = this.categories.filter(e=>this.categoryId == e.categoryId)[0].categoryName;
        this.products = this.$store.getters.getProductsByCategory({categoryId:this.categoryId,page:1});
    },
    methods:{
        pageClick(page){
            this.products = this.$store.getters.getProductsByCategory({categoryId:this.categoryId,page});
        }
    }
}
</script>