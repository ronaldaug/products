<template>
  <div class="grid">
    <Navbar :categories="categories" />
    <h3 class="title">Latest Products | page - {{current}}</h3>
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
import Navbar from '../components/navbar.vue'
import Products from '../components/products.vue'
import Loader from '../components/loader.vue'
export default {
  components:{
    Navbar,
    Products,
    Loader
  },
  data(){
    return{
      current:'1',
      products:[],
      categories:[],
      isLoading:false
    }
  },
  created(){
    this.isLoading = true;
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchCategories');
    this.$store.dispatch('fetchRelations');
  },
  watch:{
    '$store.state.allProducts':function(){
        this.products = this.$store.getters.getProducts(1);
        setTimeout(()=>{
          this.isLoading = false;
        },600)
    },
    '$store.state.categories': function(){
      this.categories = this.$store.getters.getCategories;
    }
  },
  methods:{
    pageClick(e){
        this.isLoading = true;
        this.products = this.$store.getters.getProducts(e);
        setTimeout(()=>{
          this.isLoading = false;
        },600)
    }
  }
}
</script>